//import './App.css'
// Iniciar servidor npx json-server server.json -p 3333 -w

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
