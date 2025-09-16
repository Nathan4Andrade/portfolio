import { useEffect } from "react";

const useWhatsAppTracking = () => {
  useEffect(() => {
    const button = document.getElementById("whatsapp-btn");
    if (!button) return;

    const handleClick = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "whatsapp_click",
        message: "Usuário clicou no botão de WhatsApp",
      });
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);
};

export default useWhatsAppTracking;
