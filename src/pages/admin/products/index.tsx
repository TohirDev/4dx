import CustomTable from "../../../components/CutomTable";
import TopBar from "./TopBar";
import { PageWrap } from "../../../components/PageWrap";

function Products() {
  return (
    <PageWrap
      title="Product List"
      subtitle="Detailed information about your products"
    >
      <TopBar />
      <CustomTable />
    </PageWrap>
  );
}

export default Products;
