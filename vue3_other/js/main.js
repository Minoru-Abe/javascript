const app = Vue.createApp({
    data: () => ({
        colors: []
    }),
    methods: {
        addColor: function(event){
            console.log(event)
        }
    }
})
app.mount("#app")