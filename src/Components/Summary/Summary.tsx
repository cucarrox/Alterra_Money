import { ArrowCircleDown, ArrowCircleUp, CurrencyGbp } from "@phosphor-icons/react";

export function Summary() {
   return (
      <section className="w-full max-w-[1120px] m-auto py-0 px-6 gap-2 grid grid-cols-3 mt-[-5rem]">
         <div>
            <header>
               <span>Entradas</span>
               <ArrowCircleUp className="w-6 h-6 text-green_100" />
            </header>
            <strong>£ 17,900.00</strong>
         </div>
         <div>
            <header>
               <span>Saídas</span>
               <ArrowCircleDown className="w-6 h-6 text-red_100" />
            </header>
            <strong>£ 7,367.00</strong>
         </div>
         <div>
            <header>
               <span>Total</span>
               <CurrencyGbp className="w-6 h-6 text-gray_100" />
            </header>
            <strong>£ 13,000.00</strong>
         </div>
      </section>
   )
}