<script setup>
import axios from 'axios'
import { onMounted,ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import Histogram from '@/components/Histogram.vue'
const baseUrl = import.meta.env.VITE_API_BASE_URL
const apiKey = import.meta.env.VITE_API_KEY

var today = new Date()
var month = (today.getMonth() >= 9) ? (today.getMonth()+1) : "0"+(today.getMonth()+1)
var day = (today.getDate() >= 10) ? (today.getDate()) : "0"+(today.getDate())
var date = today.getFullYear()+'-'+ month +'-'+day

onMounted(async () => {
  const params = { "dateFrom": date ,"page": 1, "key": apiKey, "limit":50}

  try{
  const response = await axios.get(`${baseUrl}/api/stocks`, {params})
  items.value = response.data.data;
  } catch (err) {
    console.log(err)
  }
  })
</script>

<template>
  <div class="container-fluid">
    <h1>Stocks</h1>
    <Histogram :items="items"/>
    <DataTable :items="items"/>
</div>
</template>
