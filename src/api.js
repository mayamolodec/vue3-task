import axios from "axios"

const api = axios.create({
  baseURL:  "/api",
  timeout: 5000,
})

export const getIncomes = (params) => api.get("/incomes", {params})
export const getSales = (params) => api.get("/sales", {params})
export const getOrders = (params) => api.get("/orders", {params})
export const getStocks = (params) => api.get("/stocks", {params})

export default api
