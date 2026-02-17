import { Sequelize } from 'sequelize-typescript';
import { Producto } from 'src/productos/entities/producto.entity';

export const databaseProviders = [
{
    provide: 'SEQUELIZE',
    useFactory: async () => {
    const sequelize = new Sequelize({
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        username: 'Mauricio',
        password: '1234',
        database: 'ClaseProcedimientos',
        dialectOptions: {
        options: {
            trustServerCertificate: true,
            encrypt: false,
        },
        },
        define: {
        freezeTableName: true,
        createdAt: false,
          updatedAt: false,
        },
      });
      // Agregar modelos aquí
sequelize.addModels([Producto]); 
      return sequelize;
    },
  },
];
