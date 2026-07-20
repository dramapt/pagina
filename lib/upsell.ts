// Hotmart checkout URL for the post-purchase upsell (2nd lifetime access €9,99).
// TODO: replace with the real upsell offer link when available.
export const UPSELL_CHECKOUT_URL =
  "https://pay.hotmart.com/N106017665W?off=upsell999&checkoutMode=10"

// Where to send users who skip the upsell (DramaPT platform / login).
export const PLATFORM_URL = "https://plataforma.dramapt.vip/login"

// Order bump +18 "Cenas Sem Censura" (R$19,90) — página /obrigado agressiva.
// TODO: substituir pelo offer code real do Hotmart quando essa oferta for criada.
// O redirecionamento pós-decisão (aceitou -> /presente, recusou -> /acesso)
// é configurado no painel do Hotmart (Sales Funnel / Order Bump), não aqui.
export const ADULT_BUMP_CHECKOUT_URL =
  "https://pay.hotmart.com/N106017665W?off=adulto1990&checkoutMode=10"
export const ADULT_BUMP_PRICE = "R$19,90"
