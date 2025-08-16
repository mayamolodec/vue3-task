<script setup>
import { ref } from 'vue'
const props = defineProps({
    names:{
        type: Array,
        reqiried:true
    }
})
const isOpen = ref(false);
const emit = defineEmits(['update:filter'])
const selected = ref('Warehouse filter')

const selectedItem = (name) =>{
    selected.value = name
    emit('update:filter', name)
    isOpen.value = false
}
</script>

<template>
    <div class="dropdown" style="position: relative;">
  <button class="btn btn-secondary dropdown-toggle" type="button"  @click="isOpen=!isOpen">
    {{selected}}
  </button>
  <ul v-if="isOpen" class="dropdown-menu show" style="display: block; position: absolute; top: 100%;" >
    <li class="dropdown-item" @click="selectedItem('Warehouse filter')">
        Весь список
    </li>
    <li class="dropdown-item" v-for="name in names" :key="name" @click="selectedItem(name)">
        {{ name }}
    </li >

  </ul>
</div>
</template>
