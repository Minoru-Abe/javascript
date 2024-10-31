const app = Vue.createApp({
    data: () => ({
        user: {
            firstName: 'Taro',
            lastName : 'Yamada',
            age: 23
        }
    })
})
app.mount('#app')