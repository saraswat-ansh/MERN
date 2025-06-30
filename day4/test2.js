const EventEmitter = require('events');
const { exit, emit } = require('process');
const emitter = new EventEmitter();

const bookingHistory = [];


emitter.on('roomBooked', (booking) => {
    console.log(`Booking confirmed for ${booking.guestName}.`);
});

emitter.on('roomBooked', (booking) => {
    console.log(`Guest: ${booking.guestName}, Room: ${booking.roomType} - ${booking.roomNumber}`);
});

emitter.on('roomBooked', (booking) => {
    if (!booking.paymentStatus) {
        console.log(`Payment pending for ${booking.guestName}. Cannot proceed.`);
        return;
    }
    console.log(`Payment received. Proceeding with room preparation.`);
});

emitter.on('roomBooked', (booking) => {
    if (booking.paymentStatus == true) {
        console.log(`Housekeeping notified for Room ${booking.roomNumber}.`);
    } else {
        // console.log(`Payment pending for ${booking.guestName}. Cannot proceed.`);
        return;
    }
});

emitter.on('roomBooked', (booking) => {
    // setTimeout(() => {
    //     console.log(`SMS sent to ${booking.guestName}: Your booking is confirmed for Room ${booking.roomNumber}.`);
    // }, 2000);
    if (booking.paymentStatus == true) {
           setTimeout(() => {
        console.log(`SMS sent to ${booking.guestName}: Your booking is confirmed for Room ${booking.roomNumber}.`);
    }, 2000);
    } else {
        // console.log(`Payment pending for ${booking.guestName}. Cannot proceed.`);
        return;
    }
});

emitter.on('roomBooked', (booking) => {
    bookingHistory.push({
        guestName: booking.guestName,
        roomNumber: booking.roomNumber,
        timestamp: new Date().toISOString()
    }); if (booking.paymentStatus == true) {
        console.log(`Booking added to history.`);
    } else {
        // console.log(`Payment pending for ${booking.guestName}. Cannot proceed.`);
        return;
    }

});

emitter.emit('roomBooked', {
    guestName: 'Riya Sharma',
    roomType: 'Executive Suite',
    roomNumber: 502,
    paymentStatus: false

    
});
// emitter.emit('roomCancelled', {
//   guestName: 'Riya Sharma',
//   roomType: 'Executive Suite',
//   roomNumber: 502,
//   paymentStatus: true
// });

// setTimeout(() => {
//   console.log('\nBooking History:', bookingHistory);
// }, 3000);


if (emit.paymentStatus == true) {
    setTimeout(() => {
        console.log('\nBooking History:', bookingHistory);
    }, 3000);
} else {
    // console.log(`Payment pending for ${booking.guestName}. Cannot proceed.`);
    return;
}