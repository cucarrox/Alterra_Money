import { Header } from "../../Components/Header/Header";
import { SearchForm } from "../../Components/SerachForm/SearchForm";
import { Summary } from "../../Components/Summary/Summary";

interface PriceHighlightProps {
   variant: "income" | "outcome";
   children: React.ReactNode;
 }
 
 const PriceHighlight: React.FC<PriceHighlightProps> = ({ variant, children }) => {
   const colorClass = variant === "income" ? "text-green_200" : "text-red_200";
   return <span className={`py-5 px-8 bg-gray_600 flex ${colorClass}`}>{children}</span>;
 };

export function Home() {
  return (
    <>
      <Header />
      <Summary />
      <main className="w-full max-w-[1120px] mt-16 my-auto mb-0 m-auto py-0 px-6">
         <SearchForm  />
         <table className="w-full border-separate border-spacing-x-[0] border-spacing-y-[0.5rem] mt-6">
            <tbody>
               <tr>
                  <td className="py-5 px-8 bg-gray_600 rounded-tl-md rounded-bl-md" width="50%">Desenvolvimento de site</td>
                  <PriceHighlight variant="income">£ 17.00</PriceHighlight>
                  <td className="py-5 px-8 bg-gray_600">Venda</td>
                  <td className="py-5 px-8 bg-gray_600 rounded-tr-md rounded-br-md">10/03/2024</td>
               </tr>
               <tr>
                  <td className="py-5 px-8 bg-gray_600 rounded-tl-md rounded-bl-md" width="50%">Equipamentos Eletrónicos</td>
                  <PriceHighlight variant="outcome">- £ 254.00</PriceHighlight>
                  <td className="py-5 px-8 bg-gray_600">Compra</td>
                  <td className="py-5 px-8 bg-gray_600 rounded-tr-md rounded-br-md">10/03/2024</td>
               </tr>
            </tbody>
         </table>
      </main>
    </>
  );
}
