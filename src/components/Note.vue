<template>
  <div class="note" v-click-outside="close">
<!-- <p>{{$store.getters.getNoteById(note.id)}}</p> -->
    <div class="note-header">
      <p v-if="!edition" @click="editInit()">{{ note.title }}</p>
      <p v-if="!edition" style="cursor:pointer;" @click="removeNote()">x</p>
      <input
        type="text"
        v-if="edition"
        v-model="note.title"
        @keyup.enter="editSave()"
        @keyup.esc="editReset()"
      />
    </div>
    <div class="note-body">
      <p v-if="!editionDescr" @click="editInitDescr()">{{ note.descr }}</p>
      <input
        type="text"
        v-if="editionDescr"
        v-model="note.descr"
        @keyup.enter="editSave()"
        @keyup.esc="editReset()"
      />
      <span>{{ note.date }}</span>
    </div>
    <router-link class="link" :to="`/note/${note.id}`">Подробнее</router-link>
  </div>
</template>
<script>
export default {
  props: {
    note: {
      type: Object,
      required: true
    },
    index:{
      type:Number,
      required:true
    }
  },
  data() {
    return {
      oldTitle: this.note.title,
      oldDescr: this.note.descr,
      edition: false,
      editionDescr: false
    };
  },
  methods: {
    removeNote() {

        this.$store.dispatch('removeNote', this.index)

    },
    editInit() {
      this.oldTitle = this.note.title;
      this.oldDescr = this.note.descr;
      this.edition = true;
    },
    editInitDescr() {
      this.oldDescr = this.note.descr;
      this.oldTitle = this.note.title;
      this.editionDescr = true;
    },
    editReset() {
      this.note.title = this.oldTitle;
      this.note.descr = this.oldDescr;
      this.edition = false;
      this.editionDescr = false;
    },
    editSave() {
      this.edition = false;
      this.editionDescr = false;
      this.note.date = new Date().toLocaleString();
    },
    close() {
      this.note.title = this.oldTitle;
      this.note.descr = this.oldDescr;
      this.edition = false;
      this.editionDescr = false;
    },

  }
};
</script>
<style lang="scss">
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: 0.25s;
  box-shadow: 0 30px 30px rgba(0, 0, 0, 0.02);
  &:hover {
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.04);
    transform: translate(0, -3px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
  }
}
.note-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    color: #00f;
    font-size: 22px;
  }
  svg {
    margin-right: 12px;
    color: #999;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &.active {
      color: #00f;
    }
  }
  input {
    margin-bottom: 1px;
    padding: 5px 26px;
  }
}
.note-body {
  p {
    padding: 20px 0;
  }
  span {
    font-size: 14px;
    color: #999;
  }
  input {
    margin-bottom: 1px;
    padding: 5px 26px;
  }
}
</style>
