class apiResponseHandler {
    constructor(statusCode, data, message = 'success') {
        ;(this.statusCode = statusCode),
            (this.data = data),
            (this.message = message = 'success'),
            (this.success = statusCode < 400)
    }

}
export {apiResponseHandler}
