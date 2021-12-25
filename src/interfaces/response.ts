
import { StatusCodeType } from "./types";

export interface IResponse<T> {
    message: string;
    statusCode: StatusCodeType;
    data: T[];
}