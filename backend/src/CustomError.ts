export class CustomError extends Error {
  public status: number;
  constructor (message: string, status: number) {
    super(message);
    this.status = status;
  }

  getError() {
    return {
      status: this.status,
      message: this.message,
      stack: this.stack
    };
  }
}