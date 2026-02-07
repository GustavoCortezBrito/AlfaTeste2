'use client'

import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5518390453080"
      accountName="Alfa Esquadrias"
      avatar="/alfa-logo-whatsapp.svg"
      statusMessage="Normalmente responde em 1 hora"
      chatMessage="Olá! 🤝 Como podemos ajudá-lo?"
      placeholder="Digite uma mensagem..."
      allowEsc={false}
      allowClickAway={false}
      notification
      notificationDelay={60}
      darkMode={false}
    />
  )
}