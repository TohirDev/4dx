import create from "zustand";
import { devtools } from "zustand/middleware";
import { IPricing, IProductForm, ISpecificationForm } from "../types";

interface IProducts {
  productState?: IProductForm;
  setProducts: (value: IProductForm | undefined) => void;
  specState?: ISpecificationForm;
  setSpec: (value: ISpecificationForm | undefined) => void;
  priceState?: IPricing;
  setPrice: (value: IPricing | undefined) => void;
}

export const useProductStore = create<IProducts>()(
  devtools(
    (set) => ({
      productState: undefined,
      setProducts: (data) =>
        set((state) => ({
          ...state,
          productState: data,
        })),
      specState: undefined,
      setSpec: (data) =>
        set((state) => ({
          ...state,
          specState: data,
        })),
      priceState: undefined,
      setPrice: (data) =>
        set((state) => ({
          ...state,
          priceState: data,
        })),
    }),
    { name: "Products store" }
  )
);
