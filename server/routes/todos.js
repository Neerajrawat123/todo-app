import express from 'express';

let router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('hello from todo app');
});

export default router;