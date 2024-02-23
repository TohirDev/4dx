import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ReactNode } from "react";
import { RxCross1 } from "react-icons/rx";
interface IModalProps extends Omit<DialogProps, "onClose"> {
  title: string;
  onClose: VoidFunction;
  width?: number;
  actions: ReactNode;
}
export const Modal = ({ actions, width, title, ...props }: IModalProps) => {
  return (
    <Dialog
      {...props}
      PaperProps={{
        sx: { width },
        ...props.PaperProps,
      }}
    >
      <DialogTitle sx={{ borderBottom: "1px solid #F1F5F9" }}>
        <Stack
          justifyContent="space-between"
          direction="row"
          alignItems="center"
        >
          <Typography variant="body2">{title}</Typography>
          <IconButton onClick={props.onClose}>
            <RxCross1 />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ p: 2 }}>{props.children}</DialogContent>
      <DialogActions sx={{ borderTop: "1px solid #F1F5F9" }}>
        {actions}
      </DialogActions>
    </Dialog>
  );
};
