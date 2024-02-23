import { IOption } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface IProductCreateForm {
  title: string;
  description: string;
  brand: IOption;
  category: IOption;
  images: File[] | string[];
  stock: number;
  sales: number;
  status: number;
  keyboard_language: number;
  main_memory: number;
  storage: number;
  warranty: number;
  warranty_type: number;
  weight: string;
  dimension: string;
  tax: number;
  tax_excluded: string;
  tax_included: string;
  tax_rule: string;
  price: string;
  min_order: number;
}
const triggerFields = [
  ["title", "description", "brand", "category", "images"],
  [
    "keyboard_language",
    "main_memory",
    "storage",
    "warranty",
    "warranty_type",
    "weight",
    "dimension",
  ],
  ["tax_excluded", "tax_included", "tax_rule", "min_order", "price"],
];
export const useProductCreate = (maxStep: number, onClose: VoidFunction) => {
  const methods = useForm<IProductCreateForm>({
    defaultValues: { images: [] },
  });
  const [step, setStep] = useState(0);
  const trigger = methods.trigger;
  const submit = methods.handleSubmit;
  const nextStep = async () => {
    const isValid = await trigger(
      triggerFields[step] as (keyof IProductCreateForm)[],
      { shouldFocus: true }
    );
    if (isValid) {
      if (step === maxStep) submit((data) => console.log(data))();
      setStep(step < maxStep ? step + 1 : maxStep);
    }
  };

  const prevStep = () => {
    if (step === 0) {
      onClose();
    } else setStep(step - 1);
  };

  return { nextStep, prevStep, step, methods };
};
