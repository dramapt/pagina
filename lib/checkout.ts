// Main sales page Hotmart checkout URL — Plano Básico (R$9,90), preço padrão do produto.
export const CHECKOUT_URL = "https://pay.hotmart.com/N106017665W?checkoutMode=10"

// Plano Básico — R$9,90/MENSAL (recorrente). TODO: confirmar no Hotmart que
// este checkout está configurado como assinatura recorrente, não pagamento
// único — se estiver configurado como único, é preciso trocar o link.
export const BASICO_CHECKOUT_URL = CHECKOUT_URL
export const BASICO_PRICE = "R$9,90"

// Plano VIP (R$27,90) — card da página principal. TODO: substituir pelo
// link/offer code real do Hotmart quando a oferta VIP estiver criada.
// Por enquanto aponta para o checkout padrão para não quebrar o botão.
export const VIP_CHECKOUT_URL = CHECKOUT_URL
export const VIP_PRICE = "R$27,90"

// Upgrade oferecido no modal ao clicar no Plano Básico (R$17,90) — preço
// promocional só desse modal, diferente do VIP da página principal.
// TODO: substituir pelo link/offer code real do Hotmart quando essa oferta
// de upgrade estiver criada.
export const UPGRADE_CHECKOUT_URL = CHECKOUT_URL
export const UPGRADE_PRICE = "R$17,90"
