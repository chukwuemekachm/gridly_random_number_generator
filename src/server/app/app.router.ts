import { Router } from 'express';

import { getGeneratedNumbers, generateNumbers } from './app.service';

const router = Router();

/**
 * @description Returns all the generated numbers on the platform
 */
router.get('/number', async function(req, resp, next) {
  try {
    const numbers = await getGeneratedNumbers();
    return resp.status(200).json({
      message: 'Numbers retrieved successfully',
      numbers,
    });
  } catch (error) {
    return next(error)
  }
});

/**
 * @description Generates and returns a list numbers on the platform
 */
router.post('/number', function(req, resp, next) {
  try {
    const { count } = req.body;
    const numbers = generateNumbers(count);
    return resp.status(201).json({
      message: 'Numbers generated successfully',
      numbers,
    });
  } catch (error) {
    return next(error)
  }
});

/**
 * @description Returns a 404 error message for unavailable routes
 */
router.use('*', (req, resp) => resp.status(404).json({
  message: 'Route un-available',
}));

export default router;
