import Homepage from "../../pages/Home/Homepage";
import Cards from "../../pages/1. Member Card/Cards";
import Appform from "../../pages/2. Form App/Appform";
import Zikirapp from "../../pages/3. Zikr App/Zikirapp";
import Declare from "../../pages/3. Zikr App/Declare";
import ToDo from "../../pages/4. To Do/ToDo";
import Expense from "../../pages/5. Fin Tracker/ExpenseApp";
import About from "../../pages/About/About";
import Reviews from "../../pages/Reviews/Reviews";

export const routeOptions = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
  { path: "/cards", element: <Cards />, label: "#1: Member Card" },
  {
    path: "/form-app",
    element: <Appform />,
    label: "#2: Form App",
  },
  {
    path: "/zikr-app",
    element: <Zikirapp />,
    label: "#3: Zikr App",
  },
  {
    path: "/zikr-app/declare",
    element: <Declare />,
    label: "#3: Zikr App: Declare Your Shahada",
  },
  {
    path: "/to-do-list-app",
    element: <ToDo />,
    label: "#4: To Do List App",
  },
  {
    path: "/financial-tracker-app",
    element: <Expense />,
    label: "#5: Financial Tracker App",
  },
  {
    path: "/reviews",
    element: <Reviews />,
    label: "Reviews",
  },
  { path: "/about", element: <About />, label: "About" },
];

export const routeNavbarOptions = [
  // { path: "/cards", element: <Cards />, label: "#1: Member Card" },
  // {
  //   path: "/form-app",
  //   element: <Appform />,
  //   label: "#2: Form App",
  // },
  {
    path: "/zikr-app",
    element: <Zikirapp />,
    label: "Zikr App",
  },
  {
    path: "/to-do-list-app",
    element: <ToDo />,
    label: "To Do List App",
  },
  {
    path: "/financial-tracker-app",
    element: <Expense />,
    label: "Financial Tracker App",
  },
  {
    path: "/reviews",
    element: <Reviews />,
    label: "Reviews",
  },
  { path: "/about", element: <About />, label: "About" },
];
