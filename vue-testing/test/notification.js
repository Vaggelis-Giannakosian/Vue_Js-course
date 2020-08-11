
import Vue from 'vue/dist/vue.js';
import test from 'ava';
import Notification from "../src/Notification";

let vm;

test.beforeEach(t=>{
    let N = Vue.extend(Notification)

    vm = new N({propsData:{
            message: 'Foobar'
        }}).$mount()
})


test('that it renders a notification',t=>{
    t.is(Notification.data().actualMessage,'Hello World')
})

test('that it renders a notification component',t=>{
    let n = new Vue(Notification).$mount()
    t.is(n.$el.textContent,'HELLO WORLD')
})

test('that it accepts message prop',t=>{
    t.is(vm.$el.textContent,'FOOBAR')
})

test('that it capitalizes the notification message',t=>{
    t.is(vm.$el.textContent,'FOOBAR')
})

test('test that it computes the notification',t=>{
    t.is(vm.capitalisedMessage,'FOOBAR')
})
