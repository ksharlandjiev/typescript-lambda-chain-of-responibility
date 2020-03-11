const ChainsConfig = {
  "/uninstall": { 
    chain: ["GoogleAnalyticsHandler", "MixpanelHandler"],
    response: {
      statusCode: 301,
      headers: {
          Location: process.env.UNINSTALL_REDIRECT_URI
      }
    }
  }
};

export default ChainsConfig;