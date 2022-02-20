import { io } from './http';

io.on('connection', socket => {
  console.log(`socket.io connection ${socket.id}`);

  socket.on('disconnect', () => {
    console.log(`socket.io disconnetct ${socket.id}`);
  });
});
