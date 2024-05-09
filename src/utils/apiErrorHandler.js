class apiErrorHandler extends Error {
    constructor(
        statudCode,
        message = 'Something went wrong',
        errors = [],
        stack = ''
    ) {
        super(message),
            (this.statudCode = statudCode),
            (this.data = null),
            (this.errors = errors),
            (this.message = message)
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this.global, this.constructor)
        }
    }
}

export {apiErrorHandler};