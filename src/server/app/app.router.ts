import { Router } from 'express';

const router = Router();

/**
 * @description Returns a 404 error message for unavailable routes
 */
router.use('*', (req, resp) => resp.status(404).json({
  message: 'Route un-available',
}));

export default router;
