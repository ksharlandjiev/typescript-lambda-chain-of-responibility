const ChainsConfig = {
  '/test': {
    chain: ['HandlerOne', 'HandlerTwo'],
    response: {
      statusCode: 301,
      headers: {
          Location: process.env.UNINSTALL_REDIRECT_URI
      }
    }
  }
}

export default ChainsConfig