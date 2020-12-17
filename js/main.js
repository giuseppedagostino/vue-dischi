// BONUS 1
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

var app = new Vue ({
  el: "#root",
  data: {
    // array di dischi inizialmente vuoto
    discs: [],
    // creo un array per i generi musicali
    genres: [],
  },

  methods: {
    getGenres: function() {
      const albums = this.discs;
      const genres = this.genres;
      for (var i = 0; i < albums.length; i++) {
        const album = albums[i];
        if (!genres.includes(album.genre)) {
          genres.push(album.genre);
        }
      }
      console.log("GENERI " + this.genres);
    },
  },

  mounted: function() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      // trasformo in arrow function perchè il this cambia contesto
      .then( (result) => {
        console.log("RISPOSTA SERVER");
        console.log(result.data.response);
        this.discs = result.data.response;
        console.log("ARRAY DISCHI");
        console.log(this.discs);
        this.getGenres();
      })
  }
});
