const app = Vue.createApp({
    data: () => ({
        message: 'Hello Vue.js!'
    })
})

app.component('hello-component', {
    template: '<p>Hello!</p>'
})

app.component('goodnight-component', {
    template: '<p>goodnight!</p>'
})

app.mount('#app')