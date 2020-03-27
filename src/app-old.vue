<template>
  <div class="wrapper-content wrapper-content--fixed">
      <section>
        <div class="container">
          <div id="app">
            <message v-if="message" :message="message" />

            <!-- new note -->
            <newNote :note="note" @addNote="addNote" />

            <div class="note-header">
              <!-- title -->
              <h1>{{ title }}</h1>
              <!-- search -->
              <search
                placeholder="Find Your note"
                :value="search"
                @search="search=$event"
                style="margin:36px 0"
              />
              <!-- icons-controls -->
              <div class="icons">
                <svg
                  :class="{ active: grid }"
                  @click="grid=true"
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
                  @click="grid=false"
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
            </div>

            <!-- note list -->
            <notes :notes="notesFiltr" :grid="grid" @remove="removeNote">
              <div v-if="note.edition" class="modal-overlay" :edition="note"></div>
            </notes>
          </div>
        </div>
      </section>
    </div>
</template>

<script>
  import message from "@/components/Message.vue";
import newNote from "@/components/NewNote.vue";
import notes from "@/components/Notes.vue";
import search from "@/components/Search.vue";
export default {
  components: {
    message,
    newNote,
    notes,
    search
  },
  data() {
    return {
      placeholder: "Search",
      search: "",
      title: "Notes App",
      message: null,
      grid: true,
      note: {
        title: "",
        descr: "",
        priority: "standart"
      },
      notes: [
        {
          id: 1,
          title: "First Note",
          descr: "Description for first note",
          date: new Date(Date.now()).toLocaleString(),
          priority: "standart"
        },
        {
          id: 2,
          title: "Second Note",
          descr: "Description for second note",
          date: new Date(Date.now()).toLocaleString(),
          priority: "standart"
        },
        {
          id: 3,
          title: "Third Note",
          descr: "Description for third note",
          date: new Date(Date.now()).toLocaleString(),
          priority: "standart"
        }
      ]
    };
  },
  computed: {
    notesFiltr() {
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
    addNote() {
      // console.log(this.note)
      let { title, descr, priority } = this.note;

      if (title === "") {
        this.message = "title can`t be blank!";
        return false;
      }

      this.notes.push({
        title,
        descr,
        priority,
        date: new Date(Date.now()).toLocaleString()
      });
      this.message = null;
      this.note.title = "";
      this.note.descr = "";
      this.note.priority = "standart";
    },
    removeNote(index) {
      this.notes.splice(index, 1);
    },
    searchNote(val) {
      console.log(this.search);
    }
  }
};
</script>

<style lang="scss" >

</style>
