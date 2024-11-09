const app = Vue.createApp({
    data: () => ({
        counter: 0
    }),
    methods: {
        countUp: function() {
            this.counter++
            console.log(this.counter)
        }
    }
})
app.mount("#app")