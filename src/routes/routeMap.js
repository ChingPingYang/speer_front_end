import React from "react";
const Landing = React.lazy(() => import("../pages/landing/LandingContainer"));
const Price = React.lazy(() => import("../pages/price/Price"));

export const routeMap = [
  {
    component: Landing,
    path: "/",
    exact: true,
  },
  {
    component: Price,
    path: "/price",
  },
  // {
  //     component:Landing,
  //     path: "/"
  // },
];
