import { ReactNode } from "react";
import {
  Control,
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegisterReturn,
} from "react-hook-form";

export interface IProduct {
  id: string;
  title: string;
  guid: string;
}
export type TSideNav = {
  text: string;
  icon: ReactNode;
  path: string;
  key: number;
};

export type TProjectInfos = {
  color: string;
  name: string;
};

export type TListItemLink = {
  path: string;
  text: string;
  icon: ReactNode;
};

export interface IOption {
  label: string;
  value: string;
}

export interface TextAreaProps {
  register: UseFormRegisterReturn;
}

export interface IFormItem<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?: Omit<RegisterOptions<T>, "onChange" | "onBlur">;
  required?: boolean;
}

export interface IProductForm {
  images: string;
  name: string;
  description: string;
  brand: IOption;
  category: IOption;
}

export interface ISpecificationForm {
  language: string;
  memory: string;
  storage: string;
  productWeight: string;
  dimension: string;
  warranty: string;
  warrantyType: string;
}

export interface IPricing {
  taxIncluded: string;
  taxExcluded: string;
  taxRule: IOption;
  unitPrice: string;
  minimumOrder: IOption;
}
