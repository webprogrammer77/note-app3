export default {
  state: {
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
    ],
    grid: true,
    search: null
  },
  mutations: {
    setGrid(state, payload) {
      state.grid = payload;
    },
    setNewNote(state, payload) {
      state.notes.push(payload);
    },
    removeNote(state, payload) {

      state.notes.splice(payload, 1);
    },
    setSearch(state, payload) {

      state.search = payload;
    },
  },
  actions: {
    setGrid(context, payload) {
      context.commit("setGrid", payload);
    },
    setNewNote(context, payload) {
      context.commit("setNewNote", payload);
    },
    removeNote(context, payload) {
      context.commit("removeNote", payload);
    },
    setSearch(context, payload) {
      context.commit("setSearch", payload);
    }
  },
  getters: {
    getNotes: state => state.notes,
    getGrid(state) {
      return state.grid;
    },

    filterNotes: state => search => {

      return state.notes.filter(notes => notes.title == search);
    },
    getNoteById: state => id => {
      return state.notes.find(notes => notes.id === id);
    },
    getSearch: state =>  state.search

  }
};
