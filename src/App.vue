<script setup>

</script>

<template>
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/sales">Sales</router-link>
      <router-link to="/incomes">Incomes</router-link>
      <router-link to="/stocks">Stocks</router-link>
      <router-link to="/orders">Orders</router-link>
    </div>
  </div>
  <router-view />
</template>

<style scoped>
</style>
