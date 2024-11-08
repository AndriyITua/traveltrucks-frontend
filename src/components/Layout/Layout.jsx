import { Suspense } from "react";
import Header from "../Header/Header.jsx"
import Navigation from "../Navigation/Navigation.jsx";

export default function Layout({children}) {
  return (
    <>
    <Header />
      <Navigation/>
      <Suspense fallback={<>Loading...</>}>{children}</Suspense>
    </>
  );
}
