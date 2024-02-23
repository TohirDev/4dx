import { Box } from "@mui/material";
import { PageWrap } from "../../../components/PageWrap";

function Goals() {
  return (
    <PageWrap title="Goals Page" subtitle="">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Goals</h1>
      </Box>
    </PageWrap>
  );
}

export default Goals;
