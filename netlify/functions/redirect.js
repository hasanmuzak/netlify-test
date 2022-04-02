exports.handler = async (event, context) => {
    return {
      statusCode: 301,
      headers: {
        Location: 'https://www.google.com.tr/'
      }
    }
  }