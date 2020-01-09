var fs = require('fs');
Promise = require('promise');

function read(file){
    return new Promise(function(fulfill, reject){
        fs.readFile(file, function(err, data){
            if(err){
                reject();
            }else{
                fulfill(data.toString());
            }
        })
    });
}

read('my_file.txt')
    .then((data) => {
        console.log(data);
        return '1111';
    })
    .then((data) => {
        console.log(data);
        return '2222';
    })
    .done((data) => {
        console.log(data);
    })

    // Exemplo abaixo criado como seria com callbacks
    read('my_file.txt', function(data1,callback1){
        console.log(data);
        callback1('1111', function(data2, callback2){
            console.log(data2);
            callback2('2222')
        })
    })

