
import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from "../src/Notification";

test('that it renders a notification',t=>{
    t.is(Notification.data().actualMessage,'Hello World')
})

test('that it renders a notification component',t=>{
    let n = new Vue(Notification).$mount()
    t.is(n.$el.textContent,'HELLO WORLD')
})

test('that it accepts message prop',t=>{

    let N = Vue.extend(Notification)

    let vm = new N({propsData:{
        message: 'Foobar'
        }}).$mount()

    t.is(vm.$el.textContent,'FOOBAR')
})

test('that it capitalizes the notification message',t=>{
    let N = Vue.extend(Notification)

    let vm = new N({propsData:{
            message: 'foobar'
        }}).$mount()

    t.is(vm.$el.textContent,'FOOBAR')
})
