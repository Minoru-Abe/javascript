const app = Vue.createApp({
    data: () => ({
        firstName: '',
        lastName: ''
    }),
    computed : {
        fullName: function() {
            return this.firstName + ' ' + this.lastName
        }
    }
})
app.mount('#app')