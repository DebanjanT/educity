import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Nav from "../components/navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position="top-center" autoClose={3000} />
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
