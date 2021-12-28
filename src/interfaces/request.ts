
export interface ICartItemRequest {
    id: string;
    quantity: number;
}


export interface ICartRequest {
    items: ICartItemRequest[];
}