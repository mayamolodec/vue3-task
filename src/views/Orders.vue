<script setup>
import { onMounted,ref } from "vue"
import DataTable from "@/components/DataTable.vue"
import Histogram from "@/components/Histogram.vue"
import { getOrders } from "@/api"

const items = ref([])
const loading = ref(true)

onMounted(async() =>{
  try{
    const response = await getOrders()
    items.value = response.data.data
  }
  catch(err){
    console.log("Fetch error:", err)
  }
  finally{
    loading.value = false
  }
})
</script>

<template>
  <h2 v-if="loading">Loading...</h2>
  <div v-else class="container-fluid">
    <h1>Orders</h1>
    <Histogram :items="items"/>
    <DataTable :items="items"/>
  </div>
</template>
