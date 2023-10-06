const { createApp } = Vue;

createApp({
  data(){
    return{
      titolo: 'Caio Axios!',
      risultatoChiamataAxios:'',
      apiUrl: 'https://flynn.boolean.careers/exercises/api/array/integers',
      numeroMinimo: 1,
      numeroMassimo: 100,
      quantita: 10,
      arrayResult : []
    }
  },

  methods:{
    getApi(){
      axios.get(this.apiUrl + `?min=${this.numeroMinimo}&max=${this.numeroMassimo}&items=${this.quantita}`)
        .then( (response) => {
          console.log(response.data.response);
          this.arrayResult = response.data.response;
          this.risultatoChiamataAxios = this.arrayResult.join(', ');
        })
        .catch((error) => {
          console.log(error);
        })
    }
  },

  mounted(){
    // al caricamento richiamo la funzione che fa la chiamata API
    this.getApi();
  }
}).mount('#app');