// src/utils/gtm.js
export const sendEvent = (eventName, eventData = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventData,
  });
};
