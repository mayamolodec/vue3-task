<script setup>
import {ref, watch} from "vue"
import DataTable from "@/components/DataTable.vue"
import {getStocks} from "@/api"


var today = new Date()

var month = (today.getMonth() >= 9) ? (today.getMonth()+1) : "0"+(today.getMonth()+1)
var day = (today.getDate() >= 10) ? (today.getDate()) : "0"+(today.getDate())
var date = today.getFullYear()+"-"+ month +"-"+day

const items = ref([])
const total = ref()
const page = ref(1)
const limit = ref(8)
const loading = ref(true)
const staticParams = {"dateFrom": date }

async function fetchData(){
  try{
    const response = await getStocks({...staticParams,
      page: page.value,
      limit: limit.value,
    })

    items.value = response.data.data
    total.value = response.data.meta.total

    console.log(data.meta)
  }
  catch(err){
    console.log("Fetch error:", err)
  }
  finally{
    loading.value = false
  }
}

watch(page, fetchData, { immediate: true })

function handlePageChange(p) {
  page.value = p
}
</script>

<template>
  <h2 v-if="loading">Loading...</h2>
  <div v-else class="container-fluid">
    <h1>Stocks</h1>
    <DataTable :items="items" :page="page" :limit="limit" :total="total" @page-change="handlePageChange" />
  </div>
</template>
