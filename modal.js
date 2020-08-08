Vue.component('message', {

    props: ['title', 'body'],

    data(){
      return {
            isVisible:true
        }
    },

    // methods:{
    //     hideModal(){
    //         this.isVisible = false
    //     }
    // },

    template: `<article class="message" v-show="isVisible">
                 <div class="message-header" >
                 {{ title}}
                 
                 <span @click="isVisible = false" class="close">X</span>
                 
                 </div>
                 <div class="message-body">{{ body }}</div>
                </article>`
});

Vue.component('modal',{

    methods:{
        closeModal(){
            this.$emit('closed')
        }

    },

    template: ` 
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
                <p>
                  <slot></slot>
                </p>
            </div>
        </div>
        <button @click="closeModal" class="modal-close is-large" aria-label="close"></button>
    </div>`
})

new Vue({
    el: '#root',
    data: {
        showModal:false
    }
})
