<template>
  <div class="wrapper">
    <header>
      <navbar/>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>

import navbar from '@/components/Navigation.vue'

export default {
  components: {
    navbar
  },
}

</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
}
</style>
