// src/hooks/useGtmTracking.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useGtmTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Pageview automático
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: location.pathname,
    });

    // Tracking de cliques em botões e links
    const handleClick = (e) => {
      const target = e.target.closest("button, a");
      if (!target) return;

      const eventData = {
        event: "click",
        elementType: target.tagName.toLowerCase(),
        elementId: target.id || null,
        elementClasses: target.className || null,
        elementText: target.innerText || null,
      };

      window.dataLayer.push(eventData);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [location]);
};

export default useGtmTracking;
