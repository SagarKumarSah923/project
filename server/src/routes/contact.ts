import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact';

const router = express.Router();

/**
 * POST /api/contact
 * Body: { name, email, message }
 */
router.post(
  '/',
  [
    body('name').isString().isLength({ min: 2, max: 100 }).trim(),
    body('email').isEmail().normalizeEmail(),
    body('message').isString().isLength({ min: 5, max: 5000 }).trim(),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;
      // Get client's IP (works with proxy if trust proxy is set)
      const ip =
        (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() ||
        req.ip ||
        (req.connection && (req.connection as any).remoteAddress) ||
        undefined;

      const doc = new Contact({
        name,
        email,
        message,
        ip,
      });

      await doc.save();

      return res.status(201).json({ ok: true, id: doc._id });
    } catch (err) {
      console.error('Contact save error:', err);
      return res.status(500).json({ error: 'Failed to save contact' });
    }
  }
);

export default router;