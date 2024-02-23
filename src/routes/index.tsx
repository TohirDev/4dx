import { CgGoogleTasks } from "react-icons/cg";
import { TSideNav } from "../types";
import { MdSpaceDashboard } from "react-icons/md";
import { FiShoppingCart } from "react-icons/fi";
import { GoTrophy } from "react-icons/go";

export const routes: TSideNav[] = [
  {
    key: 1,
    path: "/root",
    text: "Dashboard",
    icon: <MdSpaceDashboard size={22} />,
  },
  {
    key: 2,
    path: "/mytasks",
    text: "My Tasks",
    icon: <CgGoogleTasks size={22} />,
  },
  {
    key: 3,
    path: "/products",
    text: "Products",
    icon: <FiShoppingCart size={22} />,
  },
  {
    key: 4,
    path: "/goals",
    text: "Goals",
    icon: <GoTrophy size={22} />,
  },
];
