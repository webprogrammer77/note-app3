<template>
  <div class="new-note">
    <message v-if="message" :message="message" />
    <label for="title">Title</label>
    <input id="title" v-model="note.title" type="text" />
    <label for="title">Description</label>
    <textarea id="descr" v-model="note.descr"></textarea>
    <div class="radio-controls">
      <!-- <label :for="item.name" v-for="item in options" :key="item.name">
        <span>{{item.name}}</span>
        <input type="radio" :id="item.name" :value="item.name" v-model="note.priority" name="priority"/>
      </label> -->

    </div>
    <div class="select-controls">
      <p>Select important:</p>
      <select v-model="note.priority" >
        <option v-for="item in options" :key="item.name">{{item.name}}</option>

      </select>
      <!-- <span>{{ note.priority }}</span> -->
    </div>

    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>
<script>
import message from '@/components/Message.vue';
export default {
  components:{
    message
  },
  data() {
    return {
      note: {
        title: '',
        descr: '',
        priority: 'standart',
        id: '',
        date: new Date().toLocaleString(),
      },
      options:[
        {name: 'standart'},
        {name: 'important'},
        {name: 'veryImportant'},
      ],
      priority:'standart',
      message: null
    }
  },
  methods: {
    addNote() {
// console.log(this.note)
      let { title, descr, priority } = this.note;

      if (title === "") {
        this.message = "title can`t be blank!";
        return false;
      }

      let note ={
        id: new Date().toLocaleString(),
        title,
        descr,
        priority,
        date: new Date(Date.now()).toLocaleString()
      }


         this.$store.dispatch('setNewNote', note)

      this.message = null;
      this.note.title = "";
      this.note.descr = "";
      this.note.priority = "standart";
    }
  }
};
</script>
<style lang="scss">
.new-note {
  text-align: center;
}
.btn {
  margin-top: 30px;
}
.radio-controls {
  margin-top: 30px;

  display: flex;
  justify-content: center;
  label {
    padding: 10px;
  }
}
.select-controls {
  margin-top: 30px;
  margin-bottom: 10px;
  p {
    margin-bottom: 20px;
  }
}
</style>
