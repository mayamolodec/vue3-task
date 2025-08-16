<script setup>
import axios from 'axios'
import { onMounted,ref } from 'vue'
import DataTable from '@/components/DataTable.vue'
import Histogram from '@/components/Histogram.vue'

var today = new Date()
var month = (today.getMonth() >= 9) ? (today.getMonth()+1) : "0"+(today.getMonth()+1)
var day = (today.getDate() >= 10) ? (today.getDate()) : "0"+(today.getDate())
var date = today.getFullYear()+'-'+ month +'-'+day

console.log(date)
const loading = ref(true)
const error = ref(null)
const items = ref([])

onMounted(async () => {
  const params = { "dateFrom": date ,"page": 1, "key": "E6kUTYrYwZq2tN4QEtyzsbEBk3ie", "limit":50}

try{
  const response = await axios.get("http://109.73.206.144:6969/api/stocks", {params})
  items.value = response.data.data;
    } catch (err) {
      error.value = err.message
      console.log(err.message)
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
