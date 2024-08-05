//import './App.css'

import { TransactionsProvider } from "./Context/Context";
import { Home } from "./Pages/Home/Home";

export function App() {
  return (
    <>
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
    </>
  );
}
