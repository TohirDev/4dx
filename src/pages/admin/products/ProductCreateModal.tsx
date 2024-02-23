import ProductInfo from "./steps/ProductInformation";
import { Modal } from "../../../components/Modal";
import { Button, Stack } from "@mui/material";
import { useProductCreate } from "./useProductCreate";
import Specification from "./steps/Specification";
import Pricing from "./steps/Pricing";
import { FormProvider } from "react-hook-form";

interface IProductsModal {
  open: boolean;
  onClose: () => void;
}

const ModalActions = ({
  onPrev,
  onNext,
  prevTitle,
  nextTitle,
}: {
  onPrev: VoidFunction;
  onNext: VoidFunction;
  prevTitle: string;
  nextTitle: string;
}) => {
  return (
    <Stack sx={{ flexDirection: { md: "row", sm: "column" } }} gap={2}>
      <Button onClick={onPrev} color="inherit" variant="contained" fullWidth>
        {prevTitle}
      </Button>
      <Button onClick={onNext} fullWidth>
        {nextTitle}
      </Button>
    </Stack>
  );
};
const Steps = [
  {
    title: "Product Information",
    element: <ProductInfo />,
  },
  {
    title: "Specification",
    element: <Specification />,
  },
  {
    title: "Pricing",
    element: <Pricing />,
  },
];
export default function ProductCreateModal({ onClose, open }: IProductsModal) {
  const { nextStep, prevStep, step, methods } = useProductCreate(
    Steps.length - 1,
    onClose
  );
  // const { handleSubmit } = methods;
  const currentStep = Steps[step];
  const prevTitle = step > 0 ? "Previous" : "Cancel";
  const nextTitle = step === Steps.length - 1 ? "Done" : "Next";
  if (!open) return null;
  return (
    <FormProvider {...methods}>
      <form noValidate autoComplete="off">
        <Modal
          actions={
            <ModalActions
              onNext={nextStep}
              onPrev={prevStep}
              {...{ prevTitle, nextTitle }}
            />
          }
          width={613}
          title={currentStep.title}
          onClose={onClose}
          open
        >
          {currentStep.element}
        </Modal>
      </form>
    </FormProvider>
  );
}
