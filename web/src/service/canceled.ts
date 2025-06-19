import api from "./apiConfig"

export const canceled = async (id: number) => {

    if (id) {

        try {
            const response = await api.delete(`/canceled/${id}`)

            return response.data

        } catch (error) {

            return null
        }
    }

}