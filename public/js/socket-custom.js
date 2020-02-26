var socket = io();
//escuchar
socket.on('connect', () => console.log('Conectado al servidor'));

socket.on('disconnect', () => console.log('Conexion perdida.....'));

//lado cliente emitir
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola muchachos!!!'
}, (resp) => console.log('Resp server: ', resp));

//lado cliente escuchar
socket.on('enviarMensaje', (mensaje) => console.log('Servidor: ', mensaje));