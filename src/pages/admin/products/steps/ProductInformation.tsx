import { Stack, Typography } from "@mui/material";
import { Title } from "@/components/Title";
import { useFormContext } from "react-hook-form";
import { IProduct } from "@/types";
import { FormSelect } from "@/components/form/FormSelect";
import { FormInput } from "@/components/form/FormInput";
import useFetchData from "@/hooks/useGet";
import { IProductCreateForm } from "../useProductCreate";
import { FormImageSelect } from "@/components/form/FormImageSelect";

const BASE_URL = import.meta.env.VITE_BASEURL;
function ProductInfo() {
  const { control } = useFormContext<IProductCreateForm>();

  const [fetchProducts, { data: products, loading: productsLoading }] =
    useFetchData<IProduct[]>(`${BASE_URL}/product-brand`);

  const [fetchCategories, { data: categories, loading: categoriesLoading }] =
    useFetchData<IProduct[]>(`${BASE_URL}/product-category`);

  return (
    <>
      <Title
        subtitle="Image format .jpg .jpeg .png and minimum size 300 x 300px"
        title="Product image"
        required
      >
        <FormImageSelect {...{ control, name: "images" }} />
      </Title>
      <Title
        subtitle="Include min. 40 characters to make it more interesting"
        title="Product name"
        required
      >
        <FormInput
          size="medium"
          label="Product name"
          {...{ control, name: "title" }}
          required
        />
      </Title>
      <Title
        subtitle="Include min. 260 characters to make it easier for buyers to understand and find your product"
        title="Product description"
        required
      >
        <FormInput
          multiline
          rows={5}
          control={control}
          name="description"
          required
          placeholder="Type something..."
        />
      </Title>
      <Stack
        sx={{ width: "100%", flexDirection: { sm: "column", md: "row" } }}
        gap={2}
        mt={3}
      >
        <div style={{ flex: 1 }}>
          <Typography mb={1} variant="body1">
            Brand
          </Typography>
          <FormSelect
            onOpen={fetchProducts}
            label="Select brand"
            loading={productsLoading}
            loadingText="Products is loading..."
            options={
              products?.map((item) => ({
                label: item.title,
                value: item.id,
              })) ?? []
            }
            control={control}
            name="brand"
            required
          />
        </div>
        <div style={{ flex: 1 }}>
          <Typography mb={1} variant="body1">
            Category
          </Typography>
          <FormSelect
            onOpen={fetchCategories}
            label="Select category"
            loading={categoriesLoading}
            loadingText="Categories is loading..."
            options={
              categories?.map((item) => ({
                label: item.title,
                value: item.title,
              })) ?? []
            }
            control={control}
            name="category"
            required
          />
        </div>
      </Stack>
    </>
  );
}

export default ProductInfo;
