import express from 'express';

const router = express.Router();

router.use('/', (req, res, next) => {
  res.json({
    status: 200,
    message: 'Hello world from API',
  });
});

export default router;
