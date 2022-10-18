export const healthCheck = (req, res, next) => {
  return res.json({
    status: 200,
    initialized: true,
    uptime: process.uptime(),
  });
};
