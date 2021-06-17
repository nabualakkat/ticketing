import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statusCode = 400;
  reason = 'Email in use';
  constructor(public message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
