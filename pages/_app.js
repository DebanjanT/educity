import "tailwindcss/tailwind.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import Nav from "../components/navbar";
import Footer from "../components/footer";
import "../styles/globals.css";
import Router from "next/router";
import { useState } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

function MyApp({ Component, pageProps }) {
  TopBarProgress.config({
    barColors: {
      0: "#2563EB",
    },
    barThickness: "4",
  });
  const [progress, setProgress] = useState(false);

  Router.events.on("routeChangeStart", () => {
    setProgress(true);
    //function will fired when route change started
  });

  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
    //function will fired when route change ended
  });

  return (
    <Provider>
      {progress && <TopBarProgress />}
      <ToastContainer position="bottom-right" autoClose={3000} />
      <Nav />
      <Component {...pageProps} />

      <Footer />
    </Provider>
  );
}

export default MyApp;
