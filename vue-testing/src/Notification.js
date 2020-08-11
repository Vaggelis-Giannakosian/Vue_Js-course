export default {

    template: `
        <div>{{ actualMessage | capitalize}}</div>`,

    props: ['message'],

    filters: {
        capitalize(message) {
            return message.toUpperCase()
        }
    },

    data() {
        return {
            actualMessage: this.message || 'Hello World'
        }
    }

}