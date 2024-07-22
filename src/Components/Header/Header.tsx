import { Coins } from "@phosphor-icons/react";
import { Button } from "../Ui/Button";
import * as Dialog from "@radix-ui/react-dialog";

import logo from "../../../public/Imgs/alterra_gray-icon.png";
import { NewTransictionModal } from "../NewTransictionModal/NewTransictionModal";

export function Header() {
  return (
    <>
      <header className="bg-gray_800 pt-10 pr-0 pb-[7.5rem] select-none">
        <div className="w-full max-w-[1120px] m-auto py-0 px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img className="w-20" src={logo} alt="Alterra Logo" />
            <h1 className="text-3xl font-bold">ALTERRA MONEY</h1>
          </div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button className="px-4 py-3">
                <Coins weight="fill" className="w-5 h-5" />
                Nova transição
              </Button>
            </Dialog.Trigger>
            <NewTransictionModal />
          </Dialog.Root>
        </div>
      </header>
    </>
  );
}
