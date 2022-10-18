import path from 'path';

const preactApp = (req, res, next) => {
  if (process.env.NODE_ENV === 'development') {
    res.redirect(`${req.path}`);
  }

  const html = path.resolve('build/index.html');
  res.sendFile(html);
};

export default preactApp;
