import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface proveedorAttributes {
  id: number;
  status: string;
  owner?: number;
  created_on?: Date;
  name: string;
  solutions?: string;
  data_provaider?: string;
  media?: string;
}

export type proveedorPk = "id";
export type proveedorId = proveedor[proveedorPk];
export type proveedorOptionalAttributes = "id" | "status" | "owner" | "created_on" | "solutions" | "data_provaider" | "media";
export type proveedorCreationAttributes = Optional<proveedorAttributes, proveedorOptionalAttributes>;

export class proveedor extends Model<proveedorAttributes, proveedorCreationAttributes> implements proveedorAttributes {
  id!: number;
  status!: string;
  owner?: number;
  created_on?: Date;
  name!: string;
  solutions?: string;
  data_provaider?: string;
  media?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof proveedor {
    return sequelize.define('proveedor', {
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
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    solutions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data_provaider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    media: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'proveedor',
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
  }) as typeof proveedor;
  }
}
