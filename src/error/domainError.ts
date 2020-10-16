export default class DomainError extends Error {
  public data: any = null;
  public statusCode: number = null;
  public errorCode = 'DEF_A';

  constructor(
    statusCode: number,
    message: string = undefined,
    data: any = {},
    errorCode: string = 'DEF_A'
  ) {
    super(message || 'domain-error');
    this.data = data;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }

  public toJSON(): { code: string; message: string; data: any } {
    return {
      message: this.message,
      data: this.data,
      code: this.errorCode,
    };
  }
}
