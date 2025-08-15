<script setup>
import { ref,computed } from 'vue';

const props = defineProps({
    items:{
        type: Array,
        reqiried:true
    }
})

const rowsPerPage = 12;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.items.length / rowsPerPage));
const paginatedRows = computed(() => {
    const start = (currentPage.value - 1)*rowsPerPage;
    return props.items.slice(start, start+rowsPerPage)
})

function goToPage(page){
    if (page >=1 && page <= totalPages.value) currentPage.value = page;
}
</script>

<template>
<nav>
    <ul class="pagination">
        <li class="page-item" :class="{disabled:currentPage === 1}">
            <button class="page-link" @click="goToPage(currentPage - 1)">
                <
            </button>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{active: currentPage === page}">
            <button  class="page-link" @click="goToPage(page)">
                {{ page }}
            </button>
        </li>
        <li class="page-item" :class="{disabled:currentPage === totalPages}">
            <button class="page-link" @click="goToPage(currentPage +1)">
                >
            </button>
        </li>
    </ul>
</nav>

    <table class="table" >
    <thead>
        <tr>
            <th scope="col" v-for="name in Object.keys(items[0] || {})" :key="name">
            {{ name}}
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
