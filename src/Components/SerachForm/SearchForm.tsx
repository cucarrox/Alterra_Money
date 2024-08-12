import { useContext } from "react";
import { TransactionsContext } from "../../Context/Context";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { MagnifyingGlass } from "@phosphor-icons/react";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearchTransaction(data: SearchFormInputs) {
    await fetchTransactions(data.query);
  }

  return (
    <>
      <form
        className="flex gap-4"
        onSubmit={handleSubmit(handleSearchTransaction)}
      >
        <input
          type="text"
          placeholder="Busque uma transação"
          {...register("query")}
          className="flex-1 border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400 rounded-md placeholder:select-none"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center gap-3 p-4 px-6 bg-transparent border-[1px] border-solid border-blue_100 text-blue_100 font-bold rounded-md select-none hover:bg-blue_200 hover:text-white transition disabled:opacity-70 disabled:cursor-not-allowed "
        >
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </form>
    </>
  );
}
