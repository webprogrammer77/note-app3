<template>
  <div class="notes">
    <!-- <p>{{search }} </p> -->
    <!-- <p>{{notes }} </p> -->
    <noteItem

      :note="note"
      :index="index"
      :class="[{full: !grid}, note.priority]"
      v-for="(note, index) in notesFilter"
      :key="index"
    >


</noteItem>
  </div>
</template>
<script>
import {mapState, mapGetters} from 'vuex'
import noteItem from "@/components/Note";
export default {
  components: {
    noteItem
  },
  props: { },
  data() {
    return {
      // notes: this.$store.getters.getNotes

    };
  },
  created(){

  },
  computed: {

    // ...mapState(['notes', 'grid']),
      //  ...mapGetters('notes',[
  //           'getNotes','getGrid'
  //       ])
    notes(){
       return this.$store.getters.getNotes
    },
    search(){
       return this.$store.getters.getSearch
    },
    grid(){
       return this.$store.getters.getGrid
    },
    notesFilter() {
      let array = this.notes,
        search = this.search;
      if (!search) {
        return array;
      }
      //Small
      search = search.trim().toLowerCase();
      //Filter
      array = array.filter(function(item) {
        if (item.title.toLowerCase().indexOf(search) != -1) {
          return item;
        }
      });
      //Error
      return array;
    }
  },


  methods: {

  }
};
</script>
<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}

.important {
  background-color: rgb(252, 227, 145);
}
.veryImportant {
  background-color: rgb(253, 208, 208);
}
</style>
