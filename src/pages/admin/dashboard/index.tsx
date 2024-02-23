import { Box } from "@mui/material";
import { PageWrap } from "../../../components/PageWrap";

function Dashboard() {
  return (
    <PageWrap subtitle="Dashboard Page" title="Dashboard">
      <Box sx={{ display: "flex" }}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>dash</h1>
        </Box>
      </Box>
    </PageWrap>
  );
}

export default Dashboard;
