import { Grid, Typography } from "@mui/material";
import { FormSelect } from "@/components/form/FormSelect";
import { FormInput } from "@/components/form/FormInput";
import { IProductCreateForm } from "../useProductCreate";
import { useFormContext } from "react-hook-form";

function Pricing() {
  const { control } = useFormContext<IProductCreateForm>();

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      <Grid item sm={12}>
        <Typography variant="body1">Tax excluded Price</Typography>
        <FormInput
          required
          label="Please select"
          control={control}
          name="tax_excluded"
          size="medium"
        />
      </Grid>
      <Grid item md={12}>
        <Typography variant="body1">Tax included Price</Typography>
        <FormInput
          required
          label="Please select"
          control={control}
          name="tax_included"
          size="medium"
        />
      </Grid>

      <Grid item md={12}>
        <Typography variant="body1">Tax rule</Typography>
        <FormSelect
          options={[
            { label: "120GB SSD", value: "120GB SSD" },
            { label: "520GB SSD", value: "520GB SSd" },
          ]}
          label="Please select"
          control={control}
          name="tax_rule"
          required
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Unit Price</Typography>
        <FormInput
          label="Please select"
          control={control}
          name="price"
          required
          size="medium"
        />
      </Grid>
      <Grid item md={6}>
        <Typography variant="body1">Minimum order</Typography>
        <FormSelect
          options={[
            { label: "120GB SSD", value: "120GB SSD" },
            { label: "520GB SSD", value: "520GB SSd" },
          ]}
          label="Please select"
          control={control}
          name="min_order"
          required
        />
      </Grid>
    </Grid>
  );
}

export default Pricing;
