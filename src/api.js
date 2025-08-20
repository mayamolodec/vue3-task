import axios from "axios"


const baseUrl = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

var today = new Date()

var month = (today.getMonth() >= 9) ? (today.getMonth()+1) : "0"+(today.getMonth()+1)
var day = (today.getDate() >= 10) ? (today.getDate()) : "0"+(today.getDate())
var date = today.getFullYear()+"-"+ month +"-"+day

const api = axios.create({
  baseURL: baseUrl,
  timeout: 5000,
})

const commonParams = { "dateFrom": "2025-04-01" , "dateTo": "2025-05-01","page": 1, "key": apiKey, "limit":50}
const stocks_params = { "dateFrom": date ,"page": 1, "key": apiKey, "limit":50}

export const getIncomes = () => api.get("/api/incomes", {params:commonParams})
export const getSales = () => api.get("/api/sales", {params:commonParams})
export const getOrders = () => api.get("/api/orders", {params:commonParams})
export const getStocks = () => api.get("/api/stocks", {params:stocks_params})

export default api
