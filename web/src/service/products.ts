import api from "./apiConfig";

export const getProducts = async (searchValue?: string) => {

    try {
        const response = await api.get('/products', {
            params: { search: searchValue }
        });

        return response.data

    } catch (error) {

        return null
    }

}

