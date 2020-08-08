

Vue.component('task-list',{
    template:`<ul><task v-for="task in tasks" v-text="task.task"></task></ul>`,

    data(){
        return {
            tasks:[
                {task:'Go to the store' , completed:true},
                {task:'Go to the bank' , completed:true},
                {task:'Go to  work' , completed:true}
                ]
        }
    }
})

Vue.component('task',{
    template:'<li><slot></slot></li>',

})

new Vue({
    el: '#root',
    data: {

    }
})