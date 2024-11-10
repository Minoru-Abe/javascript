// const helloComponent = {
//     template:'<p>Hello!</p>'
// }

const total = 0

const buttonCounter = {
    template: '<div><span>count:</span><button v-on:click="countUp">{{count}}</button></div>',
    data: () => ({
        count: 0
    }),
    methods: {
        countUp: function(event){
            this.count++
        }
    }
}

const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!',
        totalCount: total
    }),
    components: {
        'hello-component': {
            template: '<p>Hello!</p>'
        },
        'counter-component': buttonCounter   
    }
})


app.component('goodnight-component', {
    template: '<p>goodnight!</p>'
})

app.mount('#app')