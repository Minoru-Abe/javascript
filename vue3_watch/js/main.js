const app = Vue.createApp({
    data: () => ({
        meter: 0,
        kilometer: 0
    }),
    watch: {
        meter: function(newValue){
            this.kilometer = newValue / 1000
        },
        kilometer: function(newValue){
            this.meter = newValue * 1000
        }
    }
})
app.mount("#app")