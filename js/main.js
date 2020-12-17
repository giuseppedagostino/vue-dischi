// Attraverso una chiamata ajax all’API di boolean avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

var app = new Vue ({
  el: "#root",
  data: {
    // array di dischi inizialmente vuoto
    discs: []
  },
  methods: {

  },
  mounted: function() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      // trasformo in arrow function perchè il this cambia contesto
      .then( (result) => {
        console.log(result.data.response);
        this.discs = result.data.response;
        console.log(this.discs);
      })
  }
});
