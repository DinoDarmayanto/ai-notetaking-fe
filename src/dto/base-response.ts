export interface BaseResponse<T>{
    succes: boolean;
    message: string;
    code: number;
    data: T;
}