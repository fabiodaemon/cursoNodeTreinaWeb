var EventEmitter = require ('events');

var emitter = new EventEmitter();

emitter.on('meu evento', function(numero){
    console.log('meu evento', numero)
});

emitter.emit('meu evento', 123);

