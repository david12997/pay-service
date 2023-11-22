import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface serviciosAttributes {
  id: number;
  status: string;
  owner?: number;
  created_on?: Date;
  nombre?: string;
  servicios_proveedor?: number;
  data_servicio?: string;
  body_request?: string;
}

export type serviciosPk = "id";
export type serviciosId = servicios[serviciosPk];
export type serviciosOptionalAttributes = "id" | "status" | "owner" | "created_on" | "nombre" | "servicios_proveedor" | "data_servicio" | "body_request";
export type serviciosCreationAttributes = Optional<serviciosAttributes, serviciosOptionalAttributes>;

export class servicios extends Model<serviciosAttributes, serviciosCreationAttributes> implements serviciosAttributes {
  id!: number;
  status!: string;
  owner?: number;
  created_on?: Date;
  nombre?: string;
  servicios_proveedor?: number;
  data_servicio?: string;
  body_request?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof servicios {
    return servicios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "draft"
    },
    owner: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    created_on: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    servicios_proveedor: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_servicio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    body_request: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'servicios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
