<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <h1 class="title">{{title}} </h1>
          <newNote/>
          <div class="note-header">
             <search
                placeholder="Find Your note"
                style="margin:36px 0"
              />
              <grid/>
          </div>
            <notes/>
        </div>
      </section>
  </div>
</template>

<script>
import newNote from '@/components/NewNote'
import search from '@/components/Search'
import grid from '@/components/Grid'
import notes from '@/components/Notes'

export default {
  components: {
    newNote,
    notes,
    grid,
    search
  },

    data() {
      return {
        title: 'NoteApp'
      }
    },
  }
</script>

<style lang="scss" >

</style>
