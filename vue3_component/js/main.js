// const helloComponent = {
//     template:'<p>Hello!</p>'
// }

const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!'
    }),
    components: {
        'hello-component': {
            template: '<p>Hello!</p>'
        }   
    }
})


app.component('goodnight-component', {
    template: '<p>goodnight!</p>'
})

app.mount('#app')