const eventem = require('events');

const emitter = new eventem();

emitter.on('data_received', (data) => {
  console.log('Data received by chel:', data);
});
emitter.on('data_received', (data) => {
  console.log('Data received by man:', data);
});
emitter.on('data_pack', (data) => {
  console.log('Data received by packer:', data);
});

emitter.emit('data_received', { id: 1, message: 'Hello from EDA!' });
emitter.emit('data_received', { id: 2, message: 'Hello from PDI!' });