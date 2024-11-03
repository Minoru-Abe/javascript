const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js'
    }),
    computed: {
        reversedMessage: function(){
            return this.message.split('').reverse().join('')

        },
        add: function() {
            return Math.random()
        }
    },
    methods: {
        reversedMessageMethod: function() {
            return this.message.split('').reverse().join('')
        },
        addMethod: function() {
            return Math.random()
        }
    }
})
app.mount('#app')