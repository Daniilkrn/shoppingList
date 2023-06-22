import Shop from "../components/Shop/shop"
import AdminAuthPage from "../components/adminPage/AdminAuthPage"
import AdminPage from "../components/adminPage/AuthPage"
import LayoutAuth from "../components/layout/LayoutAuth"
import Layout from "../components/layout/layout"
import RegPage from "../components/regPage/RegPage"
import Cart from "../components/Cart/cart"
import { ADMINPANEL_ROUTE, ADMIN_ROUTE, CART_ROUTE, CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Contacts from "../components/Contacts/contacts"
import AuthPage from "../components/adminPage/AuthPage"
import AdminHeader from "../components/adminPage/AdminHeader"

export const authRotes = [
    {
        path: ADMIN_ROUTE,
        Component: AdminAuthPage
    },
    {
        path: ADMINPANEL_ROUTE,
        Component: AdminHeader
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: RegPage
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: CART_ROUTE,
        Component: Cart
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
]

// export const LayoutPublicRoutes = [
//     {
//         pathLayout: '/',
//         LayoutComponent: Layout,
//     },
// ]

// export const LayoutAuthRoutes = [
//     {
//         pathLayout: '/',
//         LayoutComponent: LayoutAuth,
//     },
// ]
