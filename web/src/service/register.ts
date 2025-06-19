import api from "./apiConfig";

export const registerCustomer = async (name: string) => {

    localStorage.removeItem('user')

    try {

        const response = await api.post('/customer', {
            name,
        });

        return response.data

    } catch (error) {

        return null
    }

}

export const registerOrder = async (idCustomer: number, date: string) => {

    try {
        const response = await api.post('/orders', {
            idCustomer,
            date
        });

        return response.data

    } catch (error) {

        return error
    }

}

