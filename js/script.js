var app = new Vue({
  el: '#app',
  data: {
    imagenes: [],
    galeria: [
      {
        id: 1,
        src: './img/amanita.png',
      },
      {
        id: 2,
        src: './img/auto.png',
      },
      {
        id: 3,
        src: './img/flor.png',
      },
      {
        id: 4,
        src: './img/gato.png',
      },
      {
        id: 5,
        src: './img/sol.png',
      }
    ]
  },
  methods: {
    sortList() {
      this.imagenes.sort(function (a, b) {
        return a.id - b.id;
      })
    }
  }
})