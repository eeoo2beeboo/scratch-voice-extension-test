const io = require('socket.io')(3000, {
    cors: {
        origin: "*",
    }
});

io.on('connection', socket => {
    console.log('New client:', socket.id);

    socket.on('join-room', room => {
        socket.join(room);
        socket.to(room).emit('user-joined', socket.id);
    });

    socket.on('signal', data => {
        socket.to(data.to).emit('signal', {
            from: socket.id,
            signal: data.signal
        });
    });

    socket.on('disconnect', () => {
        console.log('Disconnected:', socket.id);
    });
});
