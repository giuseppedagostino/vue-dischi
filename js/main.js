// Attraverso una chiamata ajax all’API di boolean avremo a disposizione una decina di dischi musicali.
// Utilizzando vue, stampiamo a schermo una card per ogni album.

var app = new Vue ({
  el: "#root",
  data: {

  },
  methods: {

  },
  mounted: function() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/array/music")
      .then( function(result) {
        console.log(result.data.response);
      })
  }
});
