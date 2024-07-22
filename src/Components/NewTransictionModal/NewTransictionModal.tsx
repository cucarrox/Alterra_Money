import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Button } from "../Ui/Button";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CashRegister,
  X,
} from "@phosphor-icons/react";

export function NewTransictionModal() {
  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-modalBackground" />
        <Dialog.Content className="min-w-[32rem] rounded-md py-10 px-12 bg-gray_700 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <Dialog.Title className="text-lg flex gap-2 items-center">
            <CashRegister size={28} />
            Nova Transição
          </Dialog.Title>
          <Dialog.Close className="absolute bg-transparent border-0 top-6 right-6 leading-[0] cursor-pointer text-gray-200 hover:text-gray_300 transition">
            <X weight="bold" size={24} />
          </Dialog.Close>
          <form action="" className="mt-8 flex flex-col gap-4">
            <input
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400"
              type="text"
              placeholder="Descrição"
              required
            />
            <input
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400"
              type="number"
              placeholder="Preço"
              required
            />
            <input
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400"
              type="text"
              placeholder="Categoria"
              required
            />
            <RadioGroup.Root className="grid grid-cols-2 gap-4 mt-2">
              <RadioGroup.Item value="income" className="bg-gray_600 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray_200 data-radio_transiction_checked:bg-green_200 data-radio_transiction_checked:text-white data-radio_transiction_unchecked:text-green_100 data-radio_transiction_unchecked:hover:bg-gray_500 transition">
                <>
                  <ArrowCircleUp size={24} />
                </>
                <span className="text-white">Entrada</span>
              </RadioGroup.Item>
              <RadioGroup.Item value="outcome" className="bg-gray_600 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray_200 data-radio_transiction_checked:bg-red_200 data-radio_transiction_checked:text-white data-radio_transiction_unchecked:text-red_100 data-radio_transiction_unchecked:hover:bg-gray_500 transition">
                <>
                  <ArrowCircleDown size={24} />
                </>
                <span className="text-white">Saída</span>
              </RadioGroup.Item>
            </RadioGroup.Root>
            <Button className="h-12 border-0 mt-6">Cadastrar</Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}
