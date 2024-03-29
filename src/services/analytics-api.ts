// Define an interface for the parameters expected by trackPageview
interface PageviewParams {
  url: string; // Assuming URL is a string. You can adjust the types as needed.
  userId: string;
}

// Define an interface for the parameters expected by trackEvent
interface EventParams {
  url: string; // Assuming URL is a string. You can adjust the types as needed.
  userId: string;
  eventName: string; // Assuming event name is also a string.
}

/**
 * Tracks a pageview to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL is probably a good start though.
 */
export const trackPageview = (params: PageviewParams): void => {
  console.log(`--> Tracking Pageview: ${JSON.stringify(params)}`);
};

/**
 * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
 * Send as params whatever you might seem valuable to send.
 * The URL and an event name are probably a good start though.
 */
export const trackEvent = (params: EventParams): void => {
  console.log(`--> Tracking Event: ${JSON.stringify(params)}`);
};
