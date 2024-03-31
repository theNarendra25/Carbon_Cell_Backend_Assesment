const express = require('express');
const router = express.Router();
const protectedController = require('../controllers/protectedController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Protected route
 *     description: Access a protected route by providing a valid JWT token
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Protected route accessed successfully
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Invalid token
 */
router.get('/', authMiddleware.verifyToken, protectedController.protectedRoute);

module.exports = router;
