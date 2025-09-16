// src/hooks/useGtm.js
import { useEffect } from "react";

const useGtm = () => {
  useEffect(() => {
    // Pageview ao carregar a SPA
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "pageview",
      page: window.location.pathname,
    });

    // Listener para cliques em botões e links
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

    return () => document.removeEventListener("click", handleClick);
  }, []);
};

export default useGtm;
