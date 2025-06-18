import api from "./apiConfig";

export const getProducts = async () => {

    try {
        const response = await api.get('/products');

        return response.data

    } catch (error) {

        return null
    }

}

