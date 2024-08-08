import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import * as z from "zod"

const SearchFormSchema = z.object({
  query: z.string()
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema)
  })

  async function handleSearchTransaction(data: SearchFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
  }

  return (
    <>
      <form className="flex gap-4" onSubmit={handleSubmit(handleSearchTransaction)}>
        <input type="text" placeholder="Busque uma transação" {...register("query")}
          className="flex-1 border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400 rounded-md placeholder:select-none"/>
        <button  disabled={isSubmitting}
          className="flex items-center gap-3 p-4 bg-transparent border-[1px] border-solid border-blue_100 text-blue_100 font-bold rounded-md select-none hover:bg-blue_200 hover:text-white transition disabled:opacity-70 disabled:cursor-not-allowed ">
          <MagnifyingGlass size={20} />
          Buscar
        </button>
      </form>
    </>
  );
}
