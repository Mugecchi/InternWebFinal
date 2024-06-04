import Home from "./components/Web";
import Faqs from "./components/Faqs/Faqs";
import BarDaGoalan from "./components/Gallery/BarDaGoalan";

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
        path: "bardagoalan",
        element: BarDaGoalan,
      },
    ],
  },
];

export default routes;
