const app = Vue.createApp({
    data(){
        return {
            message: '',
            inputValue: ''
        }
    },
    methods: {
        displayMessage(){
           this.message = 'Hello and welcome, ' + this.inputValue
        }
    }
})

app.mount('#app')