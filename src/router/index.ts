// router/index.js
import React from 'react';

const routes:any = [
  {
    path: "/",
    component: React.lazy(() => import('../pages/home'))
  },
  {
    path: "/about",
    component: React.lazy(() => import('../pages/about'))
  }
];

export default routes