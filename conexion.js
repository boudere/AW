"use strict";
const mysql = require('mysql');

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aw_24"
});

pool.getConnection(function(err, connection) {
    if (err) {
    console.log(`Error al obtener la conexión: ${err.message}`);
    }else {
    // .... realizar consulta ....
    console.log(`Conexión exitosa`);
    }
    });

    function query(sql, params = []) {
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    connection.query(sql, params, (error, results) => {
                        connection.release();
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    });
                }
            });
        });
    }


    module.exports= {query};
