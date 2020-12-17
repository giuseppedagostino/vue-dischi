// BONUS
// Creare una select con tutti i generi dei dischi. In base a cosa scegliamo nella select, vedremo i corrispondenti cd.

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
