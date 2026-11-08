// Dados e links compartilhados pelo cabeçalho, pela pílula de navegação e pelo rodapé.

export const WHATSAPP_URL =
  "https://wa.me/551839045308?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
export const PHONE_DISPLAY = "(18) 3904-5308";
export const PHONE_HREF = "tel:+551839045308";
export const EMAIL = "contato@alfaesquadrias.com.br";
export const ADDRESS = "Av. Joaquim Constantino, 1880 · Presidente Prudente, SP";
export const INSTAGRAM_URL = "https://www.instagram.com/alfaesquadriaspp/";

/** Menu em tela cheia */
export const MENU_LINKS = [
  { id: "visao", label: "Visão geral" },
  { id: "especificacoes", label: "Especificações" },
  { id: "sobre", label: "A Alfa" },
  { id: "produtos", label: "Produtos" },
  { id: "portfolio", label: "Projetos" },
  { id: "faq", label: "Dúvidas" },
  { id: "contato", label: "Contato" },
] as const;

/** Pílula flutuante (como a sub-navegação da referência) */
export const PILL_LINKS = [
  { id: "visao", label: "Visão geral" },
  { id: "especificacoes", label: "Especificações" },
  { id: "produtos", label: "Produtos" },
  { id: "portfolio", label: "Projetos" },
  { id: "contato", label: "Contato" },
] as const;
