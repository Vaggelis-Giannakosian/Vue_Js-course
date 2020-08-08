
window.Event = new Vue();

Vue.component('coupon',{

    template: `<input @blur="onCouponApplied">`,

    methods:{
        onCouponApplied(){
            Event.$emit('applied')
        }
    }

})

new Vue({
    el: '#events',
    data: {

    },
    created(){
        Event.$on('applied',()=>{
            this.onCouponApplied()
        })
    },
    methods:{
        onCouponApplied(){
            alert('coupon applied!')
        }
    }
})
