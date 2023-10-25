import { Suspense, lazy } from "react";
import { ClipLoader } from "react-spinners";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import CityList from "./components/CityList";
import { CitiesProvider } from "./contexts/CitiesContext";
import CountryList from "./components/CountryList";
import Form from "./components/Form";
import CityInfo from "./components/CityInfo";

const Homepage = lazy(() => import("./pages/Homepage"));
// const Login = lazy(() => import("./pages/Login"));
const Product = lazy(() => import("./pages/Product"));
const Pricing = lazy(() => import("./pages/Pricing"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Suspense
          fallback={
            <ClipLoader
              size={100}
              cssOverride={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "50vh",
              }}
            />
          }
        >
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            {/* <Route path="login" element={<Login />} /> */}
            <Route path="*" element={<PageNotFound />} />
            <Route path="app" element={<AppLayout />}>
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<CityInfo />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
