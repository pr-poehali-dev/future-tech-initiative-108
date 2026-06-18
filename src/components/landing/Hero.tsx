import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"

export default function Hero() {
  const stats = [
    { value: 5000, suffix: "+", label: "Украшений продано" },
    { value: 98, suffix: "%", label: "Довольных покупателей" },
    { value: 120, suffix: "+", label: "Моделей в коллекции" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/36a66679-04e2-488d-9ab5-6e5c3f594656/files/52c30802-c8ee-46db-8cc8-2ee0b606668f.jpg"
          alt="Lumière jewelry"
          className="w-full h-full object-cover opacity-80"
          style={{ filter: "brightness(0.85) contrast(1.05)" }}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span>Авторская бижутерия ручной работы</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">УКРАШЕНИЯ,</span>
                <span className="block text-white mb-2">КОТОРЫЕ</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  Сияют
                </span>
                <span className="block text-gray-300">КАК ВЫ</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                В Lumière мы создаём авторскую бижутерию ручной работы из качественных материалов. Каждое украшение —
                это деталь, которая подчёркивает вашу индивидуальность. Серьги, кольца, колье и браслеты на любой случай.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#get-started">
                <AnimatedButton variant="slim" className="bg-white text-black hover:bg-gray-100">
                  <span className="flex items-center">
                    Смотреть каталог
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Ручная работа</p>
                    <p className="text-xs text-gray-400">Авторский дизайн</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L3.09 8.26l1.42 1.42L12 4.16l7.49 5.52 1.42-1.42L12 2z" />
                      <path d="M12 6L6.5 10.5v7h3v-5h5v5h3v-7L12 6z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Гипоаллергенно</p>
                    <p className="text-xs text-gray-400">Безопасные сплавы</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Доставка по РФ</p>
                    <p className="text-xs text-gray-400">В красивой упаковке</p>
                  </div>
                </div>
              </div>

              {/* Stats moved below badges */}
              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}