import { useRef, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

interface IImageUpload {
  onSelect: (files: File[]) => void;
  images: string[];
  error?: boolean;
}

export const ImgUpload = ({ error, images, onSelect }: IImageUpload) => {
  const [files, setFiles] = useState<File[]>([]);
  const ref = useRef<HTMLInputElement>(null);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 2,
      }}
    >
      <input
        style={{ display: "none" }}
        ref={ref}
        type="file"
        name="images"
        accept="image/png, image/gif, image/jpeg"
        multiple
        onChange={(e) => {
          const allFiles = Array.from(e.target.files as FileList);
          setFiles(allFiles);
          onSelect(allFiles);
        }}
      />

      {images.map((image, index) => (
        <Box
          sx={{
            width: "130px",
            height: "130px",
            marginRight: "8px",
            borderRadius: "12px",
            display: "grid",
            placeItems: "center",
            background: "#F8FAFC",
            "&:hover .delete-icon": {
              opacity: 1,
            },
            position: "relative",
            overflow: "hidden",
            transition: ".3s ease",
          }}
        >
          <Box
            component="img"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={image}
          />
          <IconButton
            className="delete-icon"
            sx={{
              opacity: 0.2,
              position: "absolute",
              right: 10,
              bottom: 10,
            }}
            onClick={() => {
              const buffer = files.filter(
                (_, fileIndex) => index != fileIndex
              );
              setFiles(buffer);
              onSelect(buffer);
            }}
          >
            <MdDeleteOutline size={20} color="red" />
          </IconButton>
        </Box>
      ))}
      <Box
        sx={{
          width: "130px",
          height: "130px",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "#F8FAFC",
          cursor: "pointer",
          border: `1px solid ${error ? "red" : "none"}`,
        }}
        onClick={() => ref.current?.click()}
      >
        <IoCloudUploadOutline
          size={30}
          color={error ? "red" : "#2563EB"}
        />
        <Typography
          variant="caption"
          sx={{
            color: error ? "red" : "#2563EB",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          New Image
        </Typography>
      </Box>
    </Box>
  );
};
