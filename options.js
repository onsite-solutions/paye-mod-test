//@ts-check

/**
 * Builds the options object for https requests
 *
 * @param {string} method
 * @param {string} hostName
 * @param {string} endPoint
 */
function options(method, hostName, endPoint) {
  let utcDate = new Date().toUTCString();

  if (method === 'GET') {
    return {
      uri: `https://${hostName}/${endPoint}`,
      hostname: hostName,
      path: endPoint,
      method: method,
      headers: {
        Method: method,
        Path: endPoint,
        Host: hostName,
        Date: utcDate,
        Signature: null
      }
    };
  } else if (method === 'POST') {
    return {
      uri: `https://${hostName}/${endPoint}`,
      hostname: hostName,
      path: endPoint,
      method: method,
      headers: {
        Method: method,
        Path: endPoint,
        Host: hostName,
        Date: utcDate,
        'Content-Type': 'application/json',
        Digest: null,
        Signature: null
      }
    };
  }
}

module.exports = {
  options
};
