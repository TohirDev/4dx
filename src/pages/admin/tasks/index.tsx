import { Box } from "@mui/material";
import { PageWrap } from "../../../components/PageWrap";

function Tasks() {
  return (
    <PageWrap title="Tasks" subtitle="Tasks page">
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Tasks</h1>
      </Box>
    </PageWrap>
  );
}

export default Tasks;
