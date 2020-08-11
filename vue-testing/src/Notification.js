export default {

    template: `
        <div>{{ capitalisedMessage}}</div>`,

    props: ['message'],

    computed: {
        capitalisedMessage() {
            return this.actualMessage.toUpperCase()
        }
    },

    // filters: {
    //     capitalize(message) {
    //         return message.toUpperCase()
    //     }
    // },

    data() {
        return {
            actualMessage: this.message || 'Hello World'
        }
    }

}