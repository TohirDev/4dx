import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DemoJpg from "@/assets/demo.jpg";
import { cols } from "./constant";
import CustomTableCell from "./TableCell";
import useFetchData from "@/hooks/useGet";
import { useEffect } from "react";

function CutomTable() {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const BASE_URL = import.meta.env.VITE_BASEURL;

  const [fetchTableData, { data: tableData, loading: tableDataLoading }] =
    useFetchData(`${BASE_URL}/product-list`);
  useEffect(() => {
    fetchTableData();
  }, [fetchTableData]);
  return (
    <Box
      sx={{
        background: "rgb(248, 250, 252)",
        p: 5,
        display: "flex",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{ width: "90%", borderRadius: "16px", height: "fit-content" }}
      >
        <TableContainer sx={{ borderRadius: "16px", p: 4 }}>
          {tableDataLoading ? (
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: "100%",
              }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Table sx={{ borderRadius: "16px" }}>
              <TableHead
                sx={{ background: "#F8FAFC", borderRadius: "16px" }}
              >
                <TableRow sx={{ borderCollapse: "collapse" }}>
                  {cols.map((item) => (
                    <TableCell
                      sx={{
                        "&:first-of-type": {
                          borderRadius: "16px 0 0 16px",
                        },
                        "&:last-child": {
                          borderRadius: "0 16px 16px 0",
                        },
                        fontSize: "16px",
                        fontFamily: "Inter",
                        color: "rgb(148, 163, 184)",
                        fontWeight: 500,
                        borderBottom: 0,
                      }}
                      key={item.id}
                    >
                      {item.name}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {tableDataLoading ? (
                <Box sx={{ display: "flex" }}>
                  <CircularProgress />
                </Box>
              ) : (
                <TableBody>
                  {Array.isArray(tableData) &&
                    tableData?.map(
                      (
                        row: {
                          title: string;
                          brand: {
                            title: string;
                          };
                          stock: string;
                          productPricings: {
                            price: string;
                          };
                          status: boolean;
                          sales: string;
                        },
                        i
                      ) => (
                        <TableRow key={i}>
                          <CustomTableCell
                            text={row.title}
                            sx={{ display: "flex", alignItems: "center" }}
                          >
                            <Box
                              component={"img"}
                              src={DemoJpg}
                              sx={{
                                width: "30px",
                                height: "27px",
                                borderRadius: "5px",
                                mr: "18px",
                                background: "red",
                              }}
                            />
                          </CustomTableCell>
                          <CustomTableCell text={row.brand.title} />
                          <CustomTableCell text={row?.stock} />

                          <CustomTableCell text={row?.sales} />
                          <CustomTableCell
                            text={row?.productPricings.price}
                          />
                          <CustomTableCell>
                            <Switch
                              {...label}
                              defaultChecked={row?.status}
                            />
                          </CustomTableCell>
                          <CustomTableCell>
                            <Button
                              variant="contained"
                              color="inherit"
                              sx={{ mr: 2 }}
                            >
                              Edit
                            </Button>
                            <Button variant="contained" color="error">
                              Delete
                            </Button>
                          </CustomTableCell>
                        </TableRow>
                      )
                    )}
                </TableBody>
              )}
            </Table>
          )}
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default CutomTable;
