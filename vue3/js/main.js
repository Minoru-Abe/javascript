const app = Vue.createApp({
    data: () => ({
        message: 'Hello'
    })
})
app.mount('#app')

const app2 = Vue.createApp({
    data: () => ({
        message: 'Hello2'
    })
})
app2.mount('#app2')