import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyGbp,
} from "@phosphor-icons/react";

export function Summary() {
  return (
    <section className="w-full max-w-[1120px] m-auto py-0 px-6 gap-8 grid grid-cols-3 mt-[-5rem]">
      <div className="bg-gray_600 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_300">
          <span>Entradas</span>
          <ArrowCircleUp className="w-6 h-6 text-green_100" />
        </header>
        <strong className="block mt-4 text-2xl">£ 17,900.00</strong>
      </div>
      <div className="bg-gray_600 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_300">
          <span>Saídas</span>
          <ArrowCircleDown className="w-6 h-6 text-red_100" />
        </header>
        <strong className="block mt-4 text-2xl">£ 7,367.00</strong>
      </div>
      <div className="bg-green_300 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_300">
          <span>Total</span>
          <CurrencyGbp weight="fill" size={32} className="text-gray_100" />
        </header>
        <strong className="block mt-4 text-2xl">£ 13,000.00</strong>
      </div>
    </section>
  );
}
