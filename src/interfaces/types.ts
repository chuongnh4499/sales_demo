/* eslint-disable no-unused-vars */
import { StatusCodes } from 'http-status-codes'

export enum StatusCode {
    CREATED = StatusCodes.CREATED,
    OK = StatusCodes.OK,
    BAD_REQUEST = StatusCodes.BAD_REQUEST,
    UNAUTHORIZED = StatusCodes.UNAUTHORIZED,
    FORBIDDEN = StatusCodes.FORBIDDEN,
    NOT_FOUND = StatusCodes.NOT_FOUND
}


export enum Role {
    ADMIN = '1',
    USER = '2',
    SELLER = '3'
}