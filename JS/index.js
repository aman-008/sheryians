// let arr = [5,-9,2,4,33,8];

// var arr2 = arr.filter(function(elem){
//     return elem>0
// })

// console.log(arr2)


var arr = ['aman','basundi','chintu', 'dev']

// iteration - forEach

// var out = arr.forEach(function(elem){
//     console.log( elem);
// })



// transformation - map

// var out1 = arr.map(function(elem){
//     return   elem.toUpperCase();
// })
// console.log(out1);



// filteration - filter

// var out2 = arr.filter(function(elem){
//     return elem.includes('i');
// })

// console.log(out2);
var out3 = arr.filter(function(elem){
    return elem.startsWith('a');
})

console.log(out3);