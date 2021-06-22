import express, { Request, Response } from 'express';
import { Ticket } from '../models/ticket';
import { NotFoundError, validateRequest } from '@natictrader/common';
import { param } from 'express-validator';

const router = express.Router();

router.get(
  '/api/tickets/:id',
  param('id').isMongoId().withMessage('id must be a valid MongoDB ObjectID'),
  validateRequest,
  async (req: Request, res: Response) => {
    const ticket = await Ticket.findById(req.params.id);

    if (!ticket) {
      throw new NotFoundError();
    }

    res.send(ticket);
  }
);

export { router as showTicketRouter };
