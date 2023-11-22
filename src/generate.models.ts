
import SequelizeAuto, { AutoOptions } from 'sequelize-auto';

// Reemplaza 'any' con un tipo adecuado si está disponible o definido
const auto = new SequelizeAuto('u418177199_pay_service', 'u418177199_pay_service', '5719326David-', {
    host: '185.206.162.1',
    dialect: 'mysql',
    directory: './src/models', // donde escribir los archivos
    port: 3306, // change the value to a number
    tables: ['proveedor', 'transaccion', 'usuario'], // asegúrate de que cada tabla sea un elemento separado en el array
    lang: 'ts', // especifica que quieres los modelos en TypeScript
    singularize: false, // add this property
    useDefine: true // add this property
}) as any; // Utiliza 'any' si 'SequelizeAuto' no tiene un tipo definido

auto.run().then((data: any) => { // Reemplaza 'any' con un tipo adecuado si está disponible
    console.log(data.tables); // tablas importadas
    console.log(data.foreignKeys); // claves foráneas
}).catch((error: Error) => {
    console.error('Error al generar modelos:', error);
});