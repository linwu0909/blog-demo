(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{296:function(e,r,s){"use strict";s.r(r);var t=s(14),a=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#promise"}},[e._v("Promise")]),r("ul",[r("li",[r("a",{attrs:{href:"#_1-promise有几种状态"}},[e._v("1.promise有几种状态？")])]),r("li",[r("a",{attrs:{href:"#_2-promise常见题目"}},[e._v("2.promise常见题目？")])]),r("li",[r("a",{attrs:{href:"#_3-怎么理解promise"}},[e._v("3.怎么理解promise？")])]),r("li",[r("a",{attrs:{href:"#_4-手写实现promise"}},[e._v("4.手写实现promise？")])]),r("li",[r("a",{attrs:{href:"#_5-promise构造函数是同步执行还是异步执行-then方法呢"}},[e._v("5.promise构造函数是同步执行还是异步执行，then方法呢？")])]),r("li",[r("a",{attrs:{href:"#_6-promise静态方法-实例方法-使用场景"}},[e._v("6.Promise静态方法，实例方法，使用场景？")])]),r("li",[r("a",{attrs:{href:"#_7-then方法为什么可以链式调用"}},[e._v("7.then方法为什么可以链式调用?")])]),r("li",[r("a",{attrs:{href:"#_8-封装同步定时器-如何实现一个sleep函数"}},[e._v("8.封装同步定时器/如何实现一个sleep函数？")])]),r("li",[r("a",{attrs:{href:"#_9-reject和catch区别"}},[e._v("9.reject和catch区别？")])])])])])]),r("p"),e._v(" "),r("h2",{attrs:{id:"promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[e._v("#")]),e._v(" Promise")]),e._v(" "),r("h3",{attrs:{id:"_1-promise有几种状态"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-promise有几种状态"}},[e._v("#")]),e._v(" 1.promise有几种状态？")]),e._v(" "),r("p",[e._v("三种pending(进行中)，fulfilled(已成功)，rejected(已失败)")]),e._v(" "),r("h3",{attrs:{id:"_2-promise常见题目"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-promise常见题目"}},[e._v("#")]),e._v(" 2.promise常见题目？")]),e._v(" "),r("p",[e._v("待完善")]),e._v(" "),r("h3",{attrs:{id:"_3-怎么理解promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-怎么理解promise"}},[e._v("#")]),e._v(" 3.怎么理解promise？")]),e._v(" "),r("ul",[r("li",[e._v("promise是个对象，主要用来解决回调地狱。")]),e._v(" "),r("li",[e._v("promise.resolve('foo')等价于 new promise(resolve => resolve('foo'))")])]),e._v(" "),r("div",{staticClass:"language-new promise会立即执行 line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("console.log(1)\nnew Promise(function(resolve, reject) {\n    console.log(2)\n})\nconsole.log(3)\n// 输出1 2 3\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("h3",{attrs:{id:"_4-手写实现promise"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-手写实现promise"}},[e._v("#")]),e._v(" 4.手写实现promise？")]),e._v(" "),r("p",[e._v("待完善")]),e._v(" "),r("h3",{attrs:{id:"_5-promise构造函数是同步执行还是异步执行-then方法呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-promise构造函数是同步执行还是异步执行-then方法呢"}},[e._v("#")]),e._v(" 5.promise构造函数是同步执行还是异步执行，then方法呢？")]),e._v(" "),r("p",[e._v("promise构造器是同步执行，then内部回调函数是异步执行")]),e._v(" "),r("h3",{attrs:{id:"_6-promise静态方法-实例方法-使用场景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_6-promise静态方法-实例方法-使用场景"}},[e._v("#")]),e._v(" 6.Promise静态方法，实例方法，使用场景？")]),e._v(" "),r("ul",[r("li",[e._v("promise是个类(属性添加static属于实例属性)")]),e._v(" "),r("li",[e._v("resolve reject .race .all都属于静态方法。")]),e._v(" "),r("li",[e._v(".then,.catch,.finally方法属于实例方法,")])]),e._v(" "),r("h4",{attrs:{id:"说说-race和-all"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#说说-race和-all"}},[e._v("#")]),e._v(" 说说.race和.all？")]),e._v(" "),r("p",[e._v(".race有一个完成了就返回(返回的是完成的那个的值)，.all全部完成了才返回(all成功返回的是一个数组，失败返回的是第一个失败的值)")]),e._v(" "),r("h4",{attrs:{id:"promise-any"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-any"}},[e._v("#")]),e._v(" promise.any？")]),e._v(" "),r("p",[e._v(".race有一个完成就返回，无论成功与失败。而any只要有一个成功就返回，更关心成功。没有成功就是失败，是AggregateError类型的错误")]),e._v(" "),r("h4",{attrs:{id:"promise-allsettled"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#promise-allsettled"}},[e._v("#")]),e._v(" promise.allSettled")]),e._v(" "),r("ul",[r("li",[e._v("在所有promise都fulfilled或rejected后，返回一个数组(包括成功和失败的)")]),e._v(" "),r("li",[e._v("promise.all如果有一个reject就会返回第一个失败的值，丢失了其他成功的")])]),e._v(" "),r("h3",{attrs:{id:"_7-then方法为什么可以链式调用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_7-then方法为什么可以链式调用"}},[e._v("#")]),e._v(" 7.then方法为什么可以链式调用?")]),e._v(" "),r("p",[e._v("因为then方法会返回一个新的promise")]),e._v(" "),r("h4",{attrs:{id:"实现-then方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现-then方法"}},[e._v("#")]),e._v(" 实现.then方法")]),e._v(" "),r("p",[r("code",[e._v("function test(prop) { return new Promise(resolve => { resolve(prop) }) }")])]),e._v(" "),r("h3",{attrs:{id:"_8-封装同步定时器-如何实现一个sleep函数"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_8-封装同步定时器-如何实现一个sleep函数"}},[e._v("#")]),e._v(" 8.封装同步定时器/如何实现一个sleep函数？")]),e._v(" "),r("p",[e._v("返回一个promise里面封装了定时器(定时器的function就是resolve)\n"),r("code",[e._v("function sleep (time) { return new Promise((resolve) => setTimeout(resolve, time)); }")])]),e._v(" "),r("h3",{attrs:{id:"_9-reject和catch区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_9-reject和catch区别"}},[e._v("#")]),e._v(" 9.reject和catch区别？")]),e._v(" "),r("ul",[r("li",[e._v("reject抛出异常,catch处理异常")]),e._v(" "),r("li",[e._v("reject是promise方法，catch是promise实例")])])])}),[],!1,null,null,null);r.default=a.exports}}]);