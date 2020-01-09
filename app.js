var fs = require('fs');

// console.time('Assincrono');
// var counter = 0;

// for(var i = 0; i < 1000; i++){
//     fs.readFile('my_file.txt',function(err, data){
//         if(err){
//             return console.error(err);
//         }
//         counter++;
//         console.log('Assincrono ' + data.toString());
//         if(counter === 1000){
//             console.timeEnd('Assincrono');
//         }
//     })
// }

// 196.310 ms de resposta no acima

console.time('Sincrono');
var counter = 0;

for(var i = 0; i < 1000; i++){
    var data = fs.readFileSync('my_file.txt');
    console.log('Sincrono ' + data);
}
    console.timeEnd('Sincrono');

// 114.557 ms levou o sincrono


