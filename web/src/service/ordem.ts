import api from "./apiConfig";

export const getOrder = async () => {

    const token = localStorage.getItem("user")

    if (token) {

        const user = JSON.parse(token)

        try {
            const res = await api.get(`/orders/${user.id}`)

            return res.data.data

        } catch (error) {

            return null
        }
    }

}