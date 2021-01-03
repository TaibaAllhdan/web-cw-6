// 👇🏻 قم بحل السؤال الأول هنا
let name = prompt('what your name?')

console.log(name)

function sayhello() {
    alert(`Hello ${name}`);
}

if(name){
    sayhello()
} else{
    alert('invalid input')
}