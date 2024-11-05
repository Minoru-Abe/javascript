const app = Vue.createApp({
    data: ()=> ({
        searchText: '',
        results: []
    }),
    watch: {
        searchText: function(newValue, oldValue){
            clearTimeout(this.inputTimeout)
            this.inputTimeout = setTimeout( () => {
                this.results.push({name: oldValue})
                console.log(this.results)
            }, 500)

        }
    }
})
app.mount('#app')