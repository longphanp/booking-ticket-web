import { RouteObject } from "react-router-dom";

import AuthLayout from "layouts/AuthLayout";
import BookingPage from "pages/BookingPage";
import ErrorPage from "pages/ErrorPage";
import EventTicketPage from "pages/EventTicketPage";
import HomePage from "pages/HomePage";
import LoginPage from "pages/LoginPage";
import PaymentDetailPage from "pages/PaymentDetailPage";
import PaymentPage from "pages/PaymentPage";
import TicketPage from "pages/TicketPage";

import pathname from "./pathname";

const routes: RouteObject[] = [
  {
    path: pathname.login,
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: pathname.home, element: <HomePage /> },
      { path: pathname.error, element: <ErrorPage /> },
      { path: `${pathname.events}/:id`, element: <EventTicketPage /> },
      { path: `${pathname.tickets}/:id`, element: <TicketPage /> },
      { path: pathname.payments, element: <PaymentPage /> },
      { path: `${pathname.payments}/:id`, element: <PaymentDetailPage /> },
      { path: pathname.bookings, element: <BookingPage /> },
    ],
  },
];

export default routes;
