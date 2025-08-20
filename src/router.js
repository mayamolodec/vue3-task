import { createRouter } from "vue-router"
import { createWebHistory } from "vue-router"
import Incomes from "./views/Incomes.vue"
import Sales from "./views/Sales.vue"
import Stocks from "./views/Stocks.vue"
import Orders from "./views/Orders.vue"

const routes = [
  { path: "/", name: "Default", component: Sales },
  { path: "/sales", name: "Sales", component: Sales },
  { path: "/orders", name: "Orders", component: Orders },
  { path: "/incomes", name: "Incomes", component: Incomes },
  { path: "/stocks", name: "Stocks", component: Stocks },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
