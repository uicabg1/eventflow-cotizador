import { CalendarDays, PackageCheck, Sparkles, Users } from 'lucide-react'
import { motion } from 'motion/react'

import { eventTypes } from './data/eventTypes'
import { extras } from './data/extras'
import { packages } from './data/packages'

function App() {
  const catalogStats = [
    { label: 'Tipos de evento', value: eventTypes.length, icon: CalendarDays },
    { label: 'Paquetes base', value: packages.length, icon: PackageCheck },
    { label: 'Extras listos', value: extras.length, icon: Sparkles },
  ]

  return (
    <main className="min-h-svh bg-[#f7f3ec] text-[#17211d]">
      <section className="mx-auto flex min-h-svh w-full max-w-6xl flex-col justify-center gap-10 px-6 py-10 md:px-10">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-[#6e7f57]">
            EventFlow
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#17211d] md:text-6xl">
            Base tecnica lista para construir el cotizador interactivo.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-[#5d675f] md:text-lg">
            El proyecto ya parte de React, Vite, TypeScript, Tailwind CSS,
            Motion for React y datos mock importables.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {catalogStats.map((item) => {
            const Icon = item.icon

            return (
              <div
                className="rounded-lg border border-[#ded4c4] bg-white/70 p-5 shadow-sm"
                key={item.label}
              >
                <Icon aria-hidden="true" className="mb-5 h-6 w-6 text-[#6e7f57]" />
                <p className="text-3xl font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-[#68736b]">{item.label}</p>
              </div>
            )
          })}
        </div>

        <div className="rounded-lg border border-[#ded4c4] bg-[#17211d] p-6 text-white md:max-w-2xl">
          <div className="flex items-center gap-3">
            <Users aria-hidden="true" className="h-5 w-5 text-[#d8c596]" />
            <p className="text-sm font-medium text-[#d8c596]">Siguiente modulo</p>
          </div>
          <p className="mt-3 text-2xl font-semibold">
            Logica de cotizacion y estado del wizard.
          </p>
          <p className="mt-3 text-sm leading-6 text-[#dbe5dd]">
            La fase base deja preparado el catalogo inicial para conectar calculos,
            seleccion de paquetes y persistencia local.
          </p>
        </div>
      </section>
    </main>
  )
}

export default App
