import Home from "./components/Web";
import Faqs from "./components/Faqs/Faqs";
import BarDaGoalan from "./components/Gallery/Reports";
import Orrientation from "./components/Gallery/Orrientation";
import DeploMoment from "./components/Gallery/DeploMoment";
import Client from "./components/Gallery/Client";
import Food from "./components/Gallery/Food";
import BibleStudy from "./components/Gallery/BibleStudy";
import Birthday from "./components/Gallery/Birthday";
import FunMoment from "./components/Gallery/FunMoment";

const routes = [
  {
    path: "/",

    children: [
      {
        path: "/",
        element: Home,
      },
      {
        path: "faqs",
        element: Faqs,
      },
      {
        path: "Reporting",
        element: BarDaGoalan,
      },
      {
        path: "Orrientation",
        element: Orrientation,
      },
      {
        path: "DeploMoment",
        element: DeploMoment,
      },
      {
        path: "Client",
        element: Client,
      },
      {
        path: "Food",
        element: Food,
      },
      {
        path: "BibleStudy",
        element: BibleStudy,
      },
      {
        path: "Birthday",
        element: Birthday,
      },
      {
        path: "FunMoment",
        element: FunMoment,
      },
    ],
  },
];

export default routes;
