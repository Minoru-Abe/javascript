const app = Vue.createApp({
    data: () => ({
        colors: [
            {name: 'Red'},
            {name: 'Green'},
            {name: 'Blue'}
        ]
    }),
    methods: {
        onClick: function(event){
            this.colors[1].name = 'White'
        }
    },
    watch: {
        colors: {
            handler: function(newValue, oldValue){
            console.log('Update!')
        },
        deep: true
        }
    }
})
app.mount('#app')