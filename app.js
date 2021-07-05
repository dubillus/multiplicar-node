const argv = require('./config/yargs').argv
    // const colors = require('colors')
const colors = require('colors/safe')

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let commando = argv._[0];

switch (commando) {
    case 'listar':
        console.log('Listar');
        listarTabla(argv.base, argv.limite)
            // .then(archivo => console.log(archivo))
            // .catch(err => console.log(err));
        break;
    case 'crear':
        console.log('Crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


// let argv2 = process.argv;

// console.log(argv2);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];