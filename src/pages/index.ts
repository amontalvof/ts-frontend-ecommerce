import { lazy } from 'react';

const LazyCart = lazy(
    /* webpackChunkName: "LazyCart" */ () => import('./Cart')
);
const LazyError404 = lazy(
    /* webpackChunkName: "LazyError404" */ () => import('./Error404')
);
const LazyMain = lazy(
    /* webpackChunkName: "LazyMain" */ () => import('./Main')
);
const LazyProductInfo = lazy(
    /* webpackChunkName: "LazyProductInfo" */ () => import('./ProductInfo')
);
const LazyProducts = lazy(
    /* webpackChunkName: "LazyProducts" */ () => import('./Products')
);
const LazyUserProfile = lazy(
    /* webpackChunkName: "LazyUserProfile" */ () => import('./UserProfile')
);
const LazyVerify = lazy(
    /* webpackChunkName: "LazyVerify" */ () => import('./Verify')
);

export {
    LazyCart,
    LazyError404,
    LazyMain,
    LazyProductInfo,
    LazyProducts,
    LazyUserProfile,
    LazyVerify,
};
