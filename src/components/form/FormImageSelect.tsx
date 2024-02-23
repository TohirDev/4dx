import { Controller } from "react-hook-form";
import { ImgUpload } from "../ImageUpload";
import { IFormItem } from "@/types";

export const FormImageSelect = <T extends object>(props: IFormItem<T>) => {
  return (
    <Controller
      {...props}
      render={({ field: { onChange, value }, formState: { errors } }) => (
        <ImgUpload
          error={Boolean(errors)}
          images={((value as File[] | string[]) ?? []).map((file) => {
            if (typeof file === "string") return file;
            return URL.createObjectURL(file);
          })}
          onSelect={(files) => onChange(files)}
        />
      )}
    />
  );
};
