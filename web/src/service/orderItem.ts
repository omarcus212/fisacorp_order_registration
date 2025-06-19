import type { OrderRequest } from "../interface/orderItem";
import api from "./apiConfig";

export const registerOrderItemList = async (data: OrderRequest) => {

    try {
        const response = await api.post('/ordersItem', data);

        return response.data

    } catch (error) {

        return error
    }

}


export const registerOrderItemListId = async (id: number) => {

    try {
        const response = await api.get(`/ordersItem/${id}`);

        return response.data

    } catch (error) {

        return error
    }

}

export const getTotalList = async (id: number) => {

    try {
        const response = await api.get(`/ordersItemTotal/${id}`);

        return response.data

    } catch (error) {

        return null
    }
}