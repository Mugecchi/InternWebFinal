import Home from "./InternBatch6/Web";
import Faqs from "./InternBatch6/Faqs/Faqs";
import BarDaGoalan from "./InternBatch6/Gallery/Reports";
import Orrientation from "./InternBatch6/Gallery/Orrientation";
import DeploMoment from "./InternBatch6/Gallery/DeploMoment";
import Client from "./InternBatch6/Gallery/Client";
import Food from "./InternBatch6/Gallery/Food";
import BibleStudy from "./InternBatch6/Gallery/BibleStudy";
import Birthday from "./InternBatch6/Gallery/Birthday";
import FunMoment from "./InternBatch6/Gallery/FunMoment";

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
