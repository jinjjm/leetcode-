let arr = [1,3,3,1]
console.log(arr.push(4))
let ss = new String('1212121')
console.log(typeof(ss))
console.log(0=='0')
console.log(0==='0')//三等号 比较类型
console.log(!{})
console.log([])
console.log(!{}==[])
let as = "A min"
let path = /[1-9a-zA-z]+/g;
// let path = /[a-zA-Z0-9]+/;
console.log(path.test(as))
console.log(as.match('A min'))
let arr2  =  as.match('A min')
for(let i in arr2){
    console.log('i: ',i)
    console.log('arr2.i: ',arr2[i])
}
console.log(arr2.input)

// let a1 = {b: {c: {}}}

// let a2 = shallowClone(a1) // 浅拷贝方法
// a2.b.c === a1.b.c // true 新旧对象还是共享同一块内存

// let a3 = deepClone(a3) // 深拷贝方法
// a3.b.c === a1.b.c // false 新对象跟原对象不共享内存
// console.log(1)
// setTimeout(()=>{
//  console.log(2)
// }, 0)
// new Promise((resolve, reject)=>{
//  console.log('new Promise')
//  resolve()
// }).then(()=>{
//  console.log('then')
// })
// console.log(3)

console.log(1)
setTimeout(()=>{
 console.log(2)
}, 0)
new Promise((resolve, reject)=>{
 console.log('new Promise')
 resolve()
}).then(()=>{
 console.log('then')
})
new Promise((resolve, reject)=>{
 console.log('new Promise2')
 resolve()
}).then(()=>{
 console.log('then2')
})
console.log(3)