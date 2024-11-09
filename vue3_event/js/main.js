const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods: {
        countUp: function(event) {
            if (event.target.id === 'click1'){
                this.counter++
            }
            else if (event.target.id === 'click2'){
                this.counter--
            }
            else if (event.target.id === 'click3'){
                this.counter = this.counter * 2
            }
            console.log(event.target.id)
        }
    }
})
app.mount("#app")