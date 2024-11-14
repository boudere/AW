const conect = require('../conexion');

class DaoVi{
    constructor(){}

    login(data){
        var nom = data.nombre;
        var cor = data.correo;
        var tel = data.telefono;
        var fac = data.facultad;
        var con = data. contrasenia;
        

        if (data.rol == 'usuario' ){
           var r = 0;
        } else if (data.rol == 'administrador'){
            var r = 1;
        }

        const sql = "INSERT INTO usuarios (nombre, correo, telefono, facultad, contraseña, salt, rol) VALUES (?, ?, ?, ?, ?, 1, ?)";
        const params = [nom, cor, tel, fac, con, r];

        

        conect.getConnection(function(err, connection){
            if (err){
                console.log("Error en la conexión");
            } else {
                connection.query(sql, params, function (err, results){
                    connection.release();
                    if (err){
                        console.log("Error en la consulta");

                    }else {
                        console.log("Éxito");
                    }
                });
            }
        });
        

    }

}

module.exports = DaoVi;