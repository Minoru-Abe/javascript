const app = Vue.createApp({
    data: () => ({
        styleObject: {
            color: 'red',
            fontSize: '50px'
        }
    }),
    methods: {
        colorBlue: function() {
            this.styleObject.color = 'blue'
        },
        colorRed: function() {
            this.styleObject.color = 'red'
        },
        colorYellow: function() {
            this.styleObject.color = 'yellow'
        },
        colorPurple: function() {
            this.styleObject.color = 'purple'
        }
    }
})
app.mount("#app")