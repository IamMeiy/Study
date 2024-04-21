var events = require('events');
var ee = new events.EventEmitter();

var myevent = function(){
    console.log("this is my event handler");
}

ee.on('scream', myevent);

ee.emit('scream');