import { createClient } from '@google-analytics/data';

const analyticsClient = createClient({
  propertyId: process.env.GA4_PROPERTY_ID,
  credentials: {
    clientEmail: process.env.GA4_CLIENT_EMAIL,
    privateKey: process.env.GA4_PRIVATE_KEY
  }
});

export const trackEvent = async (event) => {
  await analyticsClient.events().create({
    property: process.env.GA4_PROPERTY_ID,
    events: [event]
  });
};
