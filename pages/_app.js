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
import { Offline } from "react-detect-offline";
import OfflineIndicator from "../components/internet/offlineIndicator";

function MyApp({ Component, pageProps }) {
  //top loading bar
  TopBarProgress.config({
    barColors: {
      0: "#FDCE2A",
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
      <Offline>
        <OfflineIndicator />
      </Offline>
      <ToastContainer position="top-center" autoClose={3000} />
      <Nav />
      <Component {...pageProps} />

      <Footer />
    </Provider>
  );
}

export default MyApp;
