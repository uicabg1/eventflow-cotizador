import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'

import App from './App'

describe('App client and date form', () => {
  it('uses English month, day, and year selectors for the tentative date field', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('id="event-month"')
    expect(html).toContain('id="event-day"')
    expect(html).toContain('id="event-year"')
    expect(html).toContain('<option value="01">January</option>')
    expect(html).toContain('<option value="12">December</option>')
    expect(html).toContain('grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]')
    expect(html).not.toContain('sm:grid-cols-[minmax(0,1.35fr)')
    expect(html).not.toContain('type="date"')
  })
})

describe('App proposal module', () => {
  it('renders proposal, WhatsApp and print controls from the live quote', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('id="proposal"')
    expect(html).toContain('Printable proposal')
    expect(html).toContain('Event proposal')
    expect(html).toContain('Copy WhatsApp text')
    expect(html).toContain('Open WhatsApp')
    expect(html).toContain('Print / save PDF')
    expect(html).toContain('href="https://wa.me/?text=')
  })
})
