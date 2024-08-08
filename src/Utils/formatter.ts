export const dataFormatter = new Intl.DateTimeFormat("pt-br");

export const priceFormatter = new Intl.NumberFormat("pt-br", {
   currency: "BRL",
   style: "currency",
});