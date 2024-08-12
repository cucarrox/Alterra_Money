//import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import * as z from "zod";

import { Button } from "../Ui/Button";
import {
  ArrowCircleDown,
  ArrowCircleUp,
  CashRegister,
  X,
} from "@phosphor-icons/react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransictionModalSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTransictionFormInputs = z.infer<typeof newTransictionModalSchema>;

export function NewTransictionModal() {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransictionFormInputs>({
    resolver: zodResolver(newTransictionModalSchema),
  });

  async function handleCreateNewTransaction(data: NewTransictionFormInputs) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed w-screen h-screen inset-0 bg-modalBackground" />
        <Dialog.Content
          aria-describedby={undefined}
          className="min-w-[32rem] rounded-md py-10 px-12 bg-gray_700 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
        >
          <Dialog.Title className="text-lg flex gap-2 items-center">
            <CashRegister size={28} />
            Nova Transição
          </Dialog.Title>
          <Dialog.Close className="absolute bg-transparent border-0 top-6 right-6 leading-[0] cursor-pointer text-gray-200 hover:text-gray_300 transition">
            <X weight="bold" size={24} />
          </Dialog.Close>
          <form
            onSubmit={handleSubmit(handleCreateNewTransaction)}
            className="mt-8 flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400"
            />
            <input
              type="number"
              placeholder="Preço"
              min={1}
              required
              {...register("price", { valueAsNumber: true })}
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400 [&::-webkit-inner-spin-button]:appearance-none"
            />
            <input
              type="text"
              placeholder="Categoria"
              required
              {...register("category")}
              className="rounded-md border-0 bg-gray_800 text-gray_200 p-4 placeholder:text-gray_400"
            />

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <RadioGroup.Root onValueChange={field.onChange} value={field.value} className="grid grid-cols-2 gap-4 mt-2">
                    <RadioGroup.Item
                      value="income"
                      className="bg-gray_600 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray_200 data-radio_transiction_checked:bg-green_200 data-radio_transiction_checked:text-white data-radio_transiction_unchecked:text-green_100 data-radio_transiction_unchecked:hover:bg-gray_500 transition"
                    >
                      <>
                        <ArrowCircleUp size={24} />
                      </>
                      <span className="text-white">Entrada</span>
                    </RadioGroup.Item>
                    <RadioGroup.Item
                      value="outcome"
                      className="bg-gray_600 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray_200 data-radio_transiction_checked:bg-red_200 data-radio_transiction_checked:text-white data-radio_transiction_unchecked:text-red_100 data-radio_transiction_unchecked:hover:bg-gray_500 transition"
                    >
                      <>
                        <ArrowCircleDown size={24} />
                      </>
                      <span className="text-white">Saída</span>
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                );
              }}
            />

            <Button
              disabled={isSubmitting}
              className="h-12 border-0 mt-6 disabled:opacity-70"
            >
              Cadastrar
            </Button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </>
  );
}
