import { Coins } from "@phosphor-icons/react"
import { Button } from "../Ui/Button"

import logo from "../../../public/Imgs/alterra_gray-icon.png"

export function Header() {
   return (
      <>
         <header className="bg-gray_800 pt-10 pr-0 pb-[7.5rem] select-none">
            <div className="w-full max-w-[1120px] m-auto py-0 px-6 flex justify-between items-center">
               <img className="w-20" src={logo} alt="Alterra Logo" />
               <Button className="px-5 py-3">
                  <Coins className="w-6 h-6" />
                  Nova transição
               </Button>
            </div>
         </header>
      </>
   )
}