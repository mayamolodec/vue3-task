<script setup>
import { computed } from "vue"
// import DropDown from "./DropDown.vue"

const props = defineProps({
  items:{
    type: Array,
    reqiried:true
  },
  page:{
    type: Number,
    reqiried:true
  },
  limit:{
    type: Number,
    required: true
  },
  total:{
    type: Number,
    required: true
  }
})

const emit = defineEmits([
  "page-change",
  "filter-change"
])

const totalPages = computed(() =>
  Math.ceil(props.total / props.limit)
)

function goToPage(p) {
  if (p >= 1 && p <= totalPages.value) {
    emit("page-change", p)
  }
}

const warehouseNames = computed(() =>
  [...new Set(props.items.map(i => i.warehouse_name))]
)

const visiblePages = computed(() => {
  const total = totalPages.value
  const current = props.page
  const delta = 2

  let start = Math.max(1, current - delta)
  let end = Math.min(total, current + delta)

  if (current <= delta) {
    end = Math.min(total, 1 + delta * 2)
  }

  if (current + delta >= total) {
    start = Math.max(1, total - delta * 2)
  }

  const pages = []
  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

</script>

<template>
  <div class="container-flex">
    <div class="row justify-content-start">
      <div class="col-flex">
        <nav >
          <ul class="pagination">
            <li class="page-item" :class="{disabled:page === 1}">
              <button class="page-link" @click="goToPage(page - 1)">
                ←
              </button>
            </li>
            <li class="page-item" v-for="p in visiblePages" :key="p" :class="{active: page === p}">
              <button  class="page-link" @click="goToPage(p)">
                {{ p }}
              </button>
            </li>
            <li class="page-item" :class="{disabled:page === totalPages}">
              <button class="page-link" @click="goToPage(page +1)">
                →
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <!-- <DropDown class="col-2" :names="warehouseNames" @update:filter="$emit('filter-change', $event)"/> -->
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
      <tr v-for="(item,index) in items" :key="index">
        <td v-for="name in Object.keys(item)" :key="name">{{ item[name] }}</td>
      </tr>
    </tbody>
  </table>

</template>
