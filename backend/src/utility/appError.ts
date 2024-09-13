class AppError extends Error {
    statusCode: number;
    status: string;
    isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message);
        // when we extend parent class we need to call super() in order to call the parent constructor. message is only parameter that built in error expects.

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true;

        Error.captureStackTrace(this, this.constructor);
        // When a new object is created, it will have a property called stack which is a string that represents the call stack at the point where the error was created.
        // This is useful for debugging errors.
        // Error.captureStackTrace(this, this.constructor); is used to capture the stack trace at the point where the error was created.
        // this.constructor is used to get the constructor function of the class that extends the Error class.
       
    }
}
export default AppError;