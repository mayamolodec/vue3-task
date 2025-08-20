<script setup>
import {defineProps, computed, watch} from "vue"
import { Chart, registerables } from "chart.js"
import { onMounted } from "vue"
import {ref} from "vue"

const props = defineProps({
  items:{
    type:Array,
    required: true
  }
})

Chart.register(...registerables)
let chartInstance = null
const chartRef = ref(null)

const groupedData = computed(() => {
  const counts = {}
  props.items.forEach(item => {
    const w = item.warehouse_name || "Unknown"
    counts[w] = (counts[w] || 0) + 1
  })
  return counts
})

const createChart = () => {
  if (chartInstance) chartInstance.destroy()

  chartInstance = new Chart(chartRef.value, {
    type: "bar",
    data: {
      labels: Object.keys(groupedData.value),
      datasets: [{
        label: "Число позиций для каждого склада",
        data: Object.values(groupedData.value),
        backgroundColor: "rgba(0,123,255,255)"
      }]
    },
    options: {
      responsive:true,
      plugins: {legend: {display:true}},
      scales:{
        y: {beginAtZero:true},
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 90
          }
        }
      }
    }
  })
}
onMounted(() => {
  createChart()
})

watch(props.items, (newItems) => {
  if (newItems.length > 0) {
    createChart()
  }
})
</script>

<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<style>
.chart-container {
  width: 100%;
  max-width: 800px;
  max-height: fit-content;
  margin: auto;
  display:flex;
  justify-content: start;
}
</style>
