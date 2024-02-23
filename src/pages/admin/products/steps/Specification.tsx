import { Grid, Typography } from "@mui/material";
import { FormSelect } from "@/components/form/FormSelect";
import { useFormContext } from "react-hook-form";
import { FormInput } from "@/components/form/FormInput";
import { IProduct } from "@/types";
import useFetchData from "@/hooks/useGet";
import { IProductCreateForm } from "../useProductCreate";

function Specification() {
  const BASE_URL = import.meta.env.VITE_BASEURL;
  const { control } = useFormContext<IProductCreateForm>();

  const [fetchKeyboard, { data: keyboard, loading: keyboardLoading }] =
    useFetchData<IProduct[]>(`${BASE_URL}/product-specific-keyboard`);

  const [
    fetchMainMemory,
    { data: mainMemory, loading: mainMemoryLoading },
  ] = useFetchData<IProduct[]>(`${BASE_URL}/product-specific-main-memory`);

  const [fetchStorage, { data: storage, loading: storageLoading }] =
    useFetchData<IProduct[]>(`${BASE_URL}/product-specific-main-memory`);

  const [fetchWarranty, { data: warranty, loading: warrantyLoading }] =
    useFetchData<IProduct[]>(`${BASE_URL}/product-specific-warranty`);

  const [
    fetchWarrantyType,
    { data: warrantyType, loading: warrantyTypeLoading },
  ] = useFetchData<IProduct[]>(
    `${BASE_URL}/product-specific-warranty-type`
  );

  return (
    <Grid container spacing={2}>
      <Grid item sm={12}>
        <Typography variant="body1">Keyboard language</Typography>
        <FormSelect
          required
          onOpen={fetchKeyboard}
          loading={keyboardLoading}
          loadingText={"Keyboard is loading..."}
          options={
            keyboard?.map((item) => ({
              label: item.title,
              value: item.id,
            })) ?? []
          }
          label="Please select"
          control={control}
          name="keyboard_language"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Memory</Typography>
        <FormSelect
          required
          onOpen={fetchMainMemory}
          loading={mainMemoryLoading}
          loadingText={"Memory is loading..."}
          options={
            mainMemory?.map((item) => ({
              label: item.title,
              value: item.id,
            })) ?? []
          }
          label="Please select"
          control={control}
          name="main_memory"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Storages</Typography>
        <FormSelect
          required
          onOpen={fetchStorage}
          loading={storageLoading}
          loadingText={"Storage is loading..."}
          options={
            storage?.map((item) => ({
              label: item.title,
              value: item.id,
            })) ?? []
          }
          label="Please select"
          control={control}
          name="storage"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Product Weight</Typography>
        <FormInput
          required
          label="Please select"
          control={control}
          name="weight"
          size="medium"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Dimension (L x W x T)</Typography>
        <FormInput
          required
          label="Please select"
          control={control}
          name="dimension"
          size="medium"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Warranty</Typography>
        <FormSelect
          required
          onOpen={fetchWarranty}
          loading={warrantyLoading}
          loadingText={"Warranty is loading..."}
          options={
            warranty?.map((item) => ({
              label: item.title,
              value: item.id,
            })) ?? []
          }
          label="Please select"
          control={control}
          name="warranty"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Warranty type</Typography>
        <FormSelect
          required
          onOpen={fetchWarrantyType}
          loading={warrantyTypeLoading}
          loadingText={"Warranty type is loading..."}
          options={
            warrantyType?.map((item) => ({
              label: item.title,
              value: item.id,
            })) ?? []
          }
          label="Select memory"
          control={control}
          name="warranty_type"
        />
      </Grid>
    </Grid>
  );
}

export default Specification;
