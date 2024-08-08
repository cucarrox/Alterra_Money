import { useContext } from "react";
import { Header } from "../../Components/Header/Header";
import { SearchForm } from "../../Components/SerachForm/SearchForm";
import { Summary } from "../../Components/Summary/Summary";
import { TransactionsContext } from "../../Context/Context";
import { dataFormatter, priceFormatter } from "../../Utils/formatter";

interface PriceHighlightProps {
  variant: "income" | "outcome";
  children: React.ReactNode;
}

const PriceHighlight: React.FC<PriceHighlightProps> = ({
  variant,
  children,
}) => {
  const colorClass = variant === "income" ? "text-green_100" : "text-red_100";
  return (
    <td className={`py-5 pl-8 text-center bg-gray_600 ${colorClass}`}>{children}</td>
  );
};

export function Home() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      <Header />
      <Summary />
      <main className="w-full max-w-[1120px] mt-16 my-auto mb-0 m-auto py-0 px-6">
        <SearchForm />
        <table className="w-full border-separate border-spacing-x-[0] border-spacing-y-[0.5rem] mt-6">
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%" className="py-5 pl-8 bg-gray_600 rounded-tl-md rounded-bl-md">
                    {transaction.description}
                  </td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === "outcome" && "- "}
                    {priceFormatter.format(transaction.price)}
                  </PriceHighlight>
                  <td className="py-5 pl-8 bg-gray_600">{transaction.category}</td>
                  <td className="py-5 pl-8 bg-gray_600 rounded-tr-md rounded-br-md">
                    {dataFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
}
