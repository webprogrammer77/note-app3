<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h1 class="title">{{`${note.title} ${$route.params.id}`}} </h1>

  <p>{{ note.descr }} </p><br>
  <p><em>{{ note.date }}</em> </p><br>
  <b>{{ note.priority }} </b>
        </div>
      </section>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
   data() {
      return {
        title: 'Note',

      }
    },
    computed:{
      id(){
        return this.$route.params.id
      },
      note(){
        return this.$store.getters.getNoteById(+this.id)
      }
    }

}

</script>

<style lang="scss" >

</style>
