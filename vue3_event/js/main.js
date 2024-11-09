const app = Vue.createApp({
    data: () => ({
        counter: 0,
        message: ''
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
        },
        clickHandler: function(message) {
            this.message = message
        }
    }
})
app.mount("#app")