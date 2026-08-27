import { useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import "../styles/globals.css";
import "../styles/splash.css";
import "../styles/hero.css";
import "../styles/welcome.css";
import "../styles/countdown.css";
import "../styles/ourStory.css";
import "../styles/weddingDetails.css";
import "../styles/schedule.css";
import "../styles/rsvp.css";
import "../styles/thankyou.css";
import "../styles/floatingNav.css";
import "../styles/gallery.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { name = '', partner = '' } = router?.query || {};

  useEffect(() => {
    if (!router.isReady) return;

    if (typeof window === "undefined") return;

    if (name) {
      localStorage.setItem("name", name);
    }

    if (partner) {
      localStorage.setItem("partner", partner);
    }

    // router.replace(router.pathname, undefined, { shallow: true });
  }, [router.isReady, name, partner]);

  return (
    <div className="wedding-app">
      {!isOpen ? (
        <SplashScreen onOpen={() => setIsOpen(true)} />
      ) : (
        <Component
          {...pageProps}
          guestName={name}
          partnerName={partner}
          isOpen={isOpen}
        />
      )}
    </div>
  );
}