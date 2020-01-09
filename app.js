var fs = require('fs');

// escreve no arquivo
// fs.writeFile('my_file.txt', 'Treina Web', function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log('Arquivo Criado');
// });

// insere texto no arquivo
// fs.appendFile('my_file.txt', 'testeee', function(err){
//     if(err){
//         console.error(err);
//     }
//     console.log('Arquivo Criado');
// });

// ler texto do arquivo
// fs.readFile('my_file.txt', function(err, data){
//     if(err){
//         console.error(err); 
//     }
//     console.log(data.toString());
// });

var data = fs.readFileSync('my_file.txt');
console.log(data.toString());
    


