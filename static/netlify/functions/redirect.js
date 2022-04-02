exports.handler = async (event, context) => {
    return {
      statusCode: 301,
      headers: {
        Location: '/redirect/' + event.queryStringParameters.ltcid + '/'
      }
    }
  }