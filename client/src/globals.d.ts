interface Window {
  Calendly?: any;
}

interface WindowEventMap {
  "calendly:event:scheduled": CustomEvent;
}