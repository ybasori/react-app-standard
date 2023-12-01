import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ErrorBoundary from "./Components/Layouts/ErrorBoundary/ErrorBoundary";
// import { ErrorBoundary } from "react-error-boundary";

const persistor = persistStore(store);
const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Register = React.lazy(() => import("./Pages/Register/Register"));
const ErrorBoundary = () => <>Error Bang</>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorBoundary />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
          {/* <BrowserRouter>
            <Routes>
              {router.map((item, idx) => (
                <Route
                  key={`route-${idx}`}
                  path={item.path}
                  element={item.element}
                  errorElement={item.errorElement}
                />
              ))}
            </Routes>
          </BrowserRouter> */}
        </Suspense>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </PersistGate>
    </Provider>
  );
}

// function App() {
//   return (
//     <ErrorBoundary>
//       <Suspense fallback={<div>Loading...</div>}>
//         <ErrorBoundary>
//           <RouterProvider router={router} />
//         </ErrorBoundary>
//         {/* <Login /> */}
//       </Suspense>
//     </ErrorBoundary>
//   );
// }

export default App;
