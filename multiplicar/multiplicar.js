//Nodemon te permite visualizar los cambios automaticamente
//Requireds
const fs = require('fs')
const colors = require('colors')
const { number } = require('yargs')

let listarTabla = (base, limite) => {
    // return new Promise((resolve, reject) => {
    // if (!Number(base)) {
    //     reject(`El valor introducido ${base} no es un número`);
    //     return;
    // }

    //let contenido = ''
    // for (let i = 1; i <= limite; i++) {
    //     //contenido += `${base} * ${i} = ${base*i}\n`;
    //     console.log(`${base} * ${i} = ${base*i}\n`);
    // }

    // const data = new Uint8Array(Buffer.from(contenido));
    // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    //     if (err)
    //         reject(err);
    //     else
    //         resolve(`tabla-${base}.txt`)

    // });
    // })

    console.log('================'.green);
    console.log(`tabla de ${base}`.green);
    console.log('================'.green);

    for (let i = 1; i <= limite; i++) {
        //contenido += `${base} * ${i} = ${base*i}\n`;
        console.log(`${base} * ${i} = ${base*i}\n`);
    }
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let contenido = ''
        for (let i = 1; i <= limite; i++) {
            contenido += `${base} * ${i} = ${base*i}\n`;
        }

        const data = new Uint8Array(Buffer.from(contenido));
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)

        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}