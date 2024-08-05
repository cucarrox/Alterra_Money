import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
   "rounded-[8px] font-bold flex justify-center items-center gap-2 disabled:opacity-[50%] disabled:cursor-not-allowed transition",
   {
     variants: {
       variant: {
         default: "bg-blue_100 hover:bg-blue_200 text-gray-100",
         warning: "bg-red_200 hover:bg-red_300 text-gray-100",
         transiction: "bg-gray_600 p-4 flex items-center justify-center gap-2 rounded-md cursor-pointer border-0 text-gray_200 hover:bg-gray_700",
       },
     },
     defaultVariants: {
       variant: "default",
     },
   }
 );