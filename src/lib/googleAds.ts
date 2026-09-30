declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: 'conversion',
      parameters: { send_to: string },
    ) => void
  }
}

export function trackConsultationLeadConversion() {
  window.gtag?.('event', 'conversion', {
    send_to: 'AW-18185462224/EB0aCOOMr4sdENDDwN9D',
  })
}
