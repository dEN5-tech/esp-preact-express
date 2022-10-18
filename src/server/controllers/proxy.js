import proxy from 'express-http-proxy';

// Learn more about express-http-proxy here
// https://github.com/villadora/express-http-proxy
const API_PATH = 'https://api.stashinvest.com';

export const proxyRequest = proxy(API_PATH, {
  https: true,
  proxyReqPathResolver: function(req) {
    return req.path;
  },
});
