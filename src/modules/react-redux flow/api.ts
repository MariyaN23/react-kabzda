export const api = {
    loadItems() {
        return axiosInstance.get('/items')
    },
    deleteItem(id) {
        return axiosInstance.delete('/items' + id)
    }
}