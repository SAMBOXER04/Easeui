import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "@/pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "@/pages/components/NavbarPage";
import Carousel from "@/pages/components/CarouselPage";
import Tooltip from "@/pages/components/TooltipPage";
import Layout from "@/pages/components/LayoutPage";
import AboutPage  from '../pages/AboutPage';
import TemplatePage from "@/pages/TemplatePage";


type Props = {};

const AppRouter = ({}: Props) => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
           path:"about",
           element:<AboutPage/>
        },
        {
           path:'template',  
           element:<TemplatePage/>
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path:"carousel",
              element:<Carousel/>
            },
            {
              path:"tooltip",
              element:<Tooltip/>
            },
            {
              path:"layout",
              element:<Layout/>
            },
            
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
