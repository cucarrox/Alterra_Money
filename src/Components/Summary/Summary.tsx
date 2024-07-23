import {
  ArrowCircleDown,
  ArrowCircleUp,
  CurrencyGbp,
} from "@phosphor-icons/react";

export function Summary() {
  const fictionalMoney = 17000;

  return (
    <section className="w-full max-w-[1120px] m-auto py-0 px-6 gap-8 grid grid-cols-3 mt-[-5rem]">
      <div className="bg-gray_600 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_300">
          <span>Entradas</span>
          <ArrowCircleUp size={28} className="text-green_100" />
        </header>
        <strong className="block mt-4 text-2xl">
          {new Intl.NumberFormat("en-gb", {
            currency: "GBP",
            style: "currency",
          }).format(fictionalMoney)}
        </strong>
      </div>
      <div className="bg-gray_600 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_300">
          <span>Saídas</span>
          <ArrowCircleDown size={28} className="text-red_100" />
        </header>
        <strong className="block mt-4 text-2xl">
          {new Intl.NumberFormat("en-gb", {
            currency: "GBP",
            style: "currency",
          }).format(fictionalMoney)}
        </strong>
      </div>
      <div className="bg-green_300 rounded-md p-7">
        <header className="flex items-center justify-between text-gray_100">
          <span>Total</span>
          <CurrencyGbp weight="fill" size={32} className="text-gray_100" />
        </header>
        <strong className="block mt-4 text-2xl">
          {new Intl.NumberFormat("en-gb", {
            currency: "GBP",
            style: "currency",
          }).format(fictionalMoney)}
        </strong>
      </div>
    </section>
  );
}
