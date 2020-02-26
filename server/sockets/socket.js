const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado....');
    console.log(client.id);

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //lado servidor enviar msj
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    //lado servidor escuchar a los clientes
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'ok'
        //     });
        // } else {
        //     callback({
        //         resp: 'bad'
        //     });
        //}
    });
});