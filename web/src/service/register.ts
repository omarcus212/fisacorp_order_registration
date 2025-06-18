import api from "./apiConfig";

export const registerCustomer = async (name: string) => {

    localStorage.removeItem('user')

    try {

        const response = await api.post('/customer', {
            name,
        });

        localStorage.setItem('user', JSON.stringify({
            id: response.data.data.id,
            name: response.data.data.name,
        }));

        return response.data.status

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

        return response.data.status

    } catch (error) {

        return null
    }

}

