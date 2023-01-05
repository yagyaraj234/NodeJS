

const EventsEmitter = require('events');

const event = new EventsEmitter();

event.on('hello',()=>{
    console.log("Hello world");
})

event.emit('hello');
