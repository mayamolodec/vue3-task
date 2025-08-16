<script setup>
import axios from 'axios'
import { onMounted,ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import Histogram from '@/components/Histogram.vue'
const baseUrl = import.meta.env.VITE_API_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

const items = ref([])

onMounted(async () => {
  const params = { "dateFrom": "2025-04-01" , "dateTo": "2025-05-01","page": 1, "key": "E6kUTYrYwZq2tN4QEtyzsbEBk3ie", "limit":20}

try{
  const response = await axios.get("http://109.73.206.144:6969/api/incomes", {params})
  items.value = response.data.data

}
catch(err){
  console.log(err)
}
})
</script>

<template>
  <div class="container-fluid">
    <h1>Incomes</h1>
    <Histogram :items="items"/>
    <DataTable :items="items"/>
  </div>
</template>
