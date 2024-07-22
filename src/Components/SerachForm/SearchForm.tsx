import { MagnifyingGlass } from "@phosphor-icons/react";

export function SearchForm() {
  return (
    <>
      <form className="flex gap-4">
        <input
          type="text"
          placeholder="Busque uma transação"
          className="flex-1 border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400 rounded-md"
        />
        <button className="flex items-center gap-3 p-4 bg-transparent border-[1px] border-solid border-blue_100 text-blue_100 font-bold rounded-md hover:bg-blue_200 hover:text-white transition">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </form>
    </>
  );
}
