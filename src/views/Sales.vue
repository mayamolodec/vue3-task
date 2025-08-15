<template>
  <div class="container-fluid">
    <h1>Sales</h1>
    <DataTable :items="items"/>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted,ref } from 'vue';
import DataTable from '@/components/DataTable.vue';

const items = ref([]);


onMounted(async () => {
  const params = { "dateFrom": "2025-04-04" , "dateTo": "2025-05-04","page": 1, "key": "E6kUTYrYwZq2tN4QEtyzsbEBk3ie", "limit":50};

try{
  const response = await axios.get("http://109.73.206.144:6969/api/sales", {params});
  items.value = response.data.data;

}
catch(err){
  console.log(err)
}
})




</script>
