import {
  CalendarDays,
  Check,
  ChevronRight,
  Gem,
  MessageCircle,
  PackageCheck,
  Sparkles,
  Users,
} from 'lucide-react'
import { motion } from 'motion/react'

import { eventTypes } from './data/eventTypes'
import { extras } from './data/extras'
import { packages } from './data/packages'
import { useQuoteState } from './hooks/useQuoteState'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'MXN',
  maximumFractionDigits: 0,
})

function App() {
  const { pricing, quote, toggleExtra, updateQuote } = useQuoteState()

  const selectedPackage = pricing.package

  return (
    <main className="min-h-svh bg-[#f5f1e8] text-[#18231f]">
      <section className="mx-auto grid min-h-svh w-full max-w-7xl gap-6 px-4 py-4 md:grid-cols-[minmax(0,1fr)_390px] md:px-6 lg:px-8">
        <motion.div
          className="flex min-h-[calc(100svh-2rem)] flex-col gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-[#ddd2bd] pb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#7b5d26]">
                EventFlow
              </p>
              <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-5xl">
                Event quotes ready for real client conversations.
              </h1>
            </div>
            <div className="flex items-center gap-2 rounded-md bg-[#18231f] px-3 py-2 text-sm font-medium text-white">
              <Sparkles aria-hidden="true" className="h-4 w-4 text-[#d8b764]" />
              Live pricing
            </div>
          </header>

          <div className="grid flex-1 gap-5 lg:grid-cols-[minmax(0,1fr)_310px]">
            <section className="space-y-5">
              <div className="rounded-lg border border-[#ded4c4] bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#6f5b32]">1. Event type</p>
                    <p className="text-sm text-[#66716a]">The multiplier adjusts the scope.</p>
                  </div>
                  <CalendarDays aria-hidden="true" className="h-5 w-5 text-[#7b5d26]" />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {eventTypes.map((eventType) => {
                    const isSelected = quote.eventTypeId === eventType.id

                    return (
                      <button
                        className={`rounded-lg border p-4 text-left transition ${
                          isSelected
                            ? 'border-[#1d6a56] bg-[#e8f2ed] text-[#123c32]'
                            : 'border-[#ded4c4] bg-[#fbfaf6] hover:border-[#b9aa90]'
                        }`}
                        key={eventType.id}
                        onClick={() => updateQuote({ eventTypeId: eventType.id })}
                        type="button"
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-semibold">{eventType.name}</span>
                          {isSelected ? <Check aria-hidden="true" className="h-4 w-4" /> : null}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-[#66716a]">
                          {eventType.description}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-2">
                <div className="rounded-lg border border-[#ded4c4] bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#6f5b32]">2. Guests</p>
                      <p className="text-sm text-[#66716a]">Initial planning range.</p>
                    </div>
                    <Users aria-hidden="true" className="h-5 w-5 text-[#7b5d26]" />
                  </div>

                  <label className="block text-sm font-medium text-[#3d4943]" htmlFor="guest-count">
                    Estimated guest count
                  </label>
                  <input
                    className="mt-3 w-full rounded-lg border border-[#cfc3ae] bg-[#fbfaf6] px-4 py-3 text-2xl font-semibold outline-none transition focus:border-[#1d6a56] focus:ring-2 focus:ring-[#1d6a56]/15"
                    id="guest-count"
                    min="1"
                    onChange={(event) =>
                      updateQuote({ guestCount: Math.max(1, Number(event.target.value)) })
                    }
                    type="number"
                    value={quote.guestCount}
                  />
                  <input
                    aria-label="Adjust guest count"
                    className="mt-5 w-full accent-[#1d6a56]"
                    max="250"
                    min="10"
                    onChange={(event) => updateQuote({ guestCount: Number(event.target.value) })}
                    type="range"
                    value={quote.guestCount}
                  />
                </div>

                <div className="rounded-lg border border-[#ded4c4] bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#6f5b32]">Client and date</p>
                      <p className="text-sm text-[#66716a]">Proposal details.</p>
                    </div>
                    <Gem aria-hidden="true" className="h-5 w-5 text-[#7b5d26]" />
                  </div>

                  <div className="grid gap-4 rounded-lg border border-[#eadfcd] bg-[#fbfaf6] p-3">
                    <label className="text-sm font-medium text-[#3d4943]" htmlFor="client-name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border border-[#cfc3ae] bg-white px-3 py-2 outline-none transition focus:border-[#1d6a56] focus:ring-2 focus:ring-[#1d6a56]/15"
                      id="client-name"
                      onChange={(event) => updateQuote({ clientName: event.target.value })}
                      placeholder="Prospective client"
                      type="text"
                      value={quote.clientName}
                    />

                    <label className="text-sm font-medium text-[#3d4943]" htmlFor="event-date">
                      Tentative date
                    </label>
                    <input
                      className="w-full rounded-lg border border-[#cfc3ae] bg-white px-3 py-2 outline-none transition focus:border-[#1d6a56] focus:ring-2 focus:ring-[#1d6a56]/15"
                      id="event-date"
                      onChange={(event) => updateQuote({ eventDate: event.target.value })}
                      placeholder="MM/DD/YYYY"
                      type="text"
                      value={quote.eventDate}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-[#ded4c4] bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#6f5b32]">3. Base package</p>
                    <p className="text-sm text-[#66716a]">Compare scope and price per guest.</p>
                  </div>
                  <PackageCheck aria-hidden="true" className="h-5 w-5 text-[#7b5d26]" />
                </div>

                <div className="grid gap-3">
                  {packages.map((packageOption) => {
                    const isSelected = quote.selectedPackageId === packageOption.id

                    return (
                      <button
                        className={`rounded-lg border p-4 text-left transition ${
                          isSelected
                            ? 'border-[#1d6a56] bg-[#e8f2ed]'
                            : 'border-[#ded4c4] bg-[#fbfaf6] hover:border-[#b9aa90]'
                        }`}
                        key={packageOption.id}
                        onClick={() => updateQuote({ selectedPackageId: packageOption.id })}
                        type="button"
                      >
                        <span className="flex flex-wrap items-start justify-between gap-3">
                          <span>
                            <span className="block font-semibold">{packageOption.name}</span>
                            <span className="mt-1 block text-sm leading-6 text-[#66716a]">
                              {packageOption.description}
                            </span>
                          </span>
                          <span className="text-right text-sm font-semibold text-[#1d6a56]">
                            {formatCurrency(packageOption.basePrice)}
                            <span className="block text-xs font-medium text-[#66716a]">
                              + {formatCurrency(packageOption.pricePerGuest)} per guest
                            </span>
                          </span>
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </section>

            <aside className="rounded-lg border border-[#17231f] bg-[#17231f] p-4 text-white shadow-sm">
              <div
                aria-label="Event table with warm lighting"
                className="min-h-48 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(23, 35, 31, 0.1), rgba(23, 35, 31, 0.72)), url("/event-setup.jpg")',
                }}
              />

              <div className="mt-5">
                <p className="text-sm font-medium text-[#d8b764]">Quote summary</p>
                <h2 className="mt-2 text-3xl font-semibold">{formatCurrency(pricing.total)}</h2>
                <p className="mt-2 text-sm leading-6 text-[#dce7e1]">
                  {selectedPackage.name} for a {pricing.eventType.name.toLowerCase()} with{' '}
                  {quote.guestCount} guests.
                </p>
              </div>

              <dl className="mt-5 space-y-3 border-y border-white/15 py-5 text-sm">
                <SummaryRow label="Package" value={formatCurrency(pricing.packageSubtotal)} />
                <SummaryRow label="Event adjustment" value={formatCurrency(pricing.eventAdjustment)} />
                <SummaryRow label="Extras" value={formatCurrency(pricing.extrasSubtotal)} />
              </dl>

              <button
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#d8b764] px-4 py-3 text-sm font-semibold text-[#17231f] transition hover:bg-[#e6ca7f]"
                type="button"
              >
                Prepare proposal
                <ChevronRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </aside>
          </div>
        </motion.div>

        <motion.aside
          className="flex min-h-[calc(100svh-2rem)] flex-col gap-5 rounded-lg border border-[#ded4c4] bg-white p-4 shadow-sm md:sticky md:top-4"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
        >
          <div>
            <p className="text-sm font-semibold text-[#6f5b32]">4. Extras</p>
            <p className="mt-1 text-sm leading-6 text-[#66716a]">
              Select add-ons and review the impact immediately.
            </p>
          </div>

          <div className="grid gap-3 overflow-auto pr-1">
            {extras.map((extra) => {
              const isSelected = quote.selectedExtraIds.includes(extra.id)

              return (
                <button
                  className={`rounded-lg border p-4 text-left transition ${
                    isSelected
                      ? 'border-[#1d6a56] bg-[#e8f2ed]'
                      : 'border-[#ded4c4] bg-[#fbfaf6] hover:border-[#b9aa90]'
                  }`}
                  key={extra.id}
                  onClick={() => toggleExtra(extra.id)}
                  type="button"
                >
                  <span className="flex items-start justify-between gap-3">
                    <span>
                      <span className="flex items-center gap-2 font-semibold">
                        {isSelected ? <Check aria-hidden="true" className="h-4 w-4" /> : null}
                        {extra.name}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-[#66716a]">
                        {extra.description}
                      </span>
                    </span>
                    <span className="shrink-0 text-right text-sm font-semibold text-[#1d6a56]">
                      {formatCurrency(extra.price)}
                      <span className="block text-xs font-medium text-[#66716a]">
                        {extra.priceType === 'perGuest' ? 'per guest' : 'fixed'}
                      </span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>

          <div className="mt-auto rounded-lg bg-[#f5f1e8] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#6f5b32]">
              <MessageCircle aria-hidden="true" className="h-4 w-4" />
              Next module
            </p>
            <p className="mt-2 text-sm leading-6 text-[#536058]">
              The printable proposal and WhatsApp message will build on this quote state.
            </p>
          </div>
        </motion.aside>
      </section>
    </main>
  )
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <dt className="text-[#b9c8c0]">{label}</dt>
      <dd className="font-semibold">{value}</dd>
    </div>
  )
}

function formatCurrency(value: number): string {
  return currencyFormatter.format(value)
}

export default App
