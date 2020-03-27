<template>
  <div class="navbar">
    <div class="navbar-content">
      <div class="logo">LOGO</div>
      <ul class="navbar-list">
        <li class="navbar-item " v-for="link in links" :key="link.title">
          <router-link :to="link.url">{{link.title}} </router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        links: [
          {title:"Home", url:"/"},
          {title:"Note APP", url:"/noteApp/"},
        ]
      }
    },
  }
</script>

<style lang="scss" >

</style>
