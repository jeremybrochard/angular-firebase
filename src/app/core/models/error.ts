export class Error {
    private _code: number | string;
    private _message: string;

    get code(): number | string {
        return this._code;
    }

    get message(): string {
        return this._message;
    }

    constructor(code: number | string, message: string) {
        this._code = code;
        this._message = message;
    }
}
