const boost = require('./index.js');



boost.on('error', (err) => {
    console.error('boost error', err);
});

boost.on('scanning', s => {
    console.log('scanning', s);
});

boost.on('hub-found', data => {
    console.log('boost hub-found', data);
});

boost.on('connect', () => {
    console.log('boost connect');
    boost.led('red');
    setTimeout(() => {
        boost.led('green');
    }, 1000);
    setTimeout(() => {
        boost.led('blue');
    }, 2000);
    setTimeout(() => {
        boost.led('white');
    }, 3000);
});

boost.on('disconnect', () => {
    console.log('boost disconnect');
});