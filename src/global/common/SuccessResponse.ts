import { CommonResponse } from "./commonResponse";
import { SuccessCode } from "./successCode";

export class SuccessResponse extends CommonResponse {
	private data: any;
	constructor(successCode: SuccessCode, data?: any) {
		super();
		this.statusCode = successCode.getStatusCode();
		this.message = successCode.getMessage();
		this.data = data;
	}

	public static response(successCode: SuccessCode, data?: any) {
		return new SuccessResponse(successCode, data);
	}
}
