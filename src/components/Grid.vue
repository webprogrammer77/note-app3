<template>
  <div class="icons">
    <!-- <p>{{$store.getters.getGrid}}</p> -->
    <svg
      :class="{ active: grid }"
      @click="gridTrue"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
    <svg
      :class="{ active: !grid }"
      @click="gridFalse"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3" y2="6" />
      <line x1="3" y1="12" x2="3" y2="12" />
      <line x1="3" y1="18" x2="3" y2="18" />
    </svg>
  </div>
</template>

<script>
//import { mapState} from 'vuex'
export default {
  data() {
    return {
      grid: true
    };
  },
  created() {
    this.grid = this.$store.getters.getGrid;
  },
  computed: {},
  methods: {
    gridTrue() {
      this.$store.dispatch("setGrid", true);
      this.grid = true;
    },

    gridFalse() {
      this.$store.dispatch("setGrid", false);
      this.grid = false;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
