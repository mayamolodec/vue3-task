<script setup>
import {defineProps, computed, watch} from 'vue'
import { Chart, registerables } from 'chart.js'
import { onMounted } from 'vue'
import {ref} from 'vue'
const props = defineProps({
    items:
{
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
        const w = item.warehouse_name || 'Unknown'
        counts[w] = (counts[w] || 0) + 1
    })
    return counts
})

const createChart = () => {
    if (chartInstance) chartInstance.destroy()

    chartInstance = new Chart(chartRef.value, {
        type: 'bar',
        data: {
            labels: Object.keys(groupedData.value),
      datasets: [{
        label: 'Число позиций на каждый склад',
        data: Object.values(groupedData.value),
        backgroundColor: 'rgba(54, 162, 235, 0.6)'
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
watch(groupedData, createChart, {immediate:true})
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
  height: 300px;
  margin: auto;
}
</style>
