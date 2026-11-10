"use client";

// Logotipos oficiais (Simple Icons via react-icons). O react-icons cria um React Context ao
// carregar, por isso fica atrás deste "use client" — assim Server Components (Footer) podem usar.
import { SiInstagram, SiWhatsapp } from "react-icons/si";

interface IconProps {
  className?: string;
}

export function WhatsAppIcon({ className }: IconProps) {
  return <SiWhatsapp className={className} aria-hidden="true" focusable="false" />;
}

export function InstagramIcon({ className }: IconProps) {
  return <SiInstagram className={className} aria-hidden="true" focusable="false" />;
}
