import api from "./apiConfig";

export const getOrder = async () => {

    const token = localStorage.getItem("user")

    if (token) {

        const user = JSON.parse(token)

        const id = Number(user.id)


        try {
            const response = await api.get(`/orders/${id}`)

            return response.data

        } catch (error) {

            return null
        }
    }

}

export const getRegisterOrdersList = async (searchValue?: string) => {

    try {
        const response = await api.get('/register', {
            params: { search: searchValue }
        });

        return response.data

    } catch (error) {

        return null
    }
}

export const getOrderId = async (id: number | string) => {

    try {
        const response = await api.get(`/orders/${id}`)

        return response.data

    } catch (error) {

        return null
    }

}
