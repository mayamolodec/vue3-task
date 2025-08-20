<script setup>
import { ref,computed } from "vue"
import DropDown from "./DropDown.vue"

const props = defineProps({
  items:{
    type: Array,
    reqiried:true
  }
})

const rowsPerPage = 8
const currentPage = ref(1)
const filteredValue = ref(null)

const filteredItems = computed(()=>{
  if (!filteredValue.value || filteredValue.value === "Warehouse filter") return props.items

  return props.items.filter(item => item.warehouse_name === filteredValue.value)
})

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1)*rowsPerPage

  return filteredItems.value.slice(start, start+rowsPerPage)
})

const totalPages = computed(() => Math.ceil(filteredItems.value.length / rowsPerPage))

function goToPage(page){
  if (page >=1 && page <= totalPages.value) currentPage.value = page
}
</script>

<template>
  <div class="container-flex">
    <div class="row justify-content-start">
      <div class="col-flex">
        <nav >
          <ul class="pagination">
            <li class="page-item" :class="{disabled:currentPage === 1}">
              <button class="page-link" @click="goToPage(currentPage - 1)">
                ←
              </button>
            </li>
            <li class="page-item" v-for="page in totalPages" :key="page" :class="{active: currentPage === page}">
              <button  class="page-link" @click="goToPage(page)">
                {{ page }}
              </button>
            </li>
            <li class="page-item" :class="{disabled:currentPage === totalPages}">
              <button class="page-link" @click="goToPage(currentPage +1)">
                →
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <DropDown class="col-2" :names="[...new Set(props.items.map(i => i.warehouse_name))]" @update:filter="filteredValue = $event"/>
    </div>
  </div>
  <table class="table" >
    <thead>
      <tr>
        <th scope="col" v-for="name in Object.keys(items[0] || {})" :key="name">
          {{name}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in paginatedRows" :key="index">
        <td v-for="name in Object.keys(item)" :key="name">{{ item[name] }}</td>
      </tr>
    </tbody>
  </table>

</template>
