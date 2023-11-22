import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface usuarioAttributes {
  id: number;
  status: string;
  owner?: number;
  created_on?: Date;
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
  nit?: number;
}

export type usuarioPk = "id";
export type usuarioId = usuario[usuarioPk];
export type usuarioOptionalAttributes = "id" | "status" | "owner" | "created_on" | "name" | "email" | "phone" | "password" | "nit";
export type usuarioCreationAttributes = Optional<usuarioAttributes, usuarioOptionalAttributes>;

export class usuario extends Model<usuarioAttributes, usuarioCreationAttributes> implements usuarioAttributes {
  id!: number;
  status!: string;
  owner?: number;
  created_on?: Date;
  name?: string;
  email?: string;
  phone?: number;
  password?: string;
  nit?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof usuario {
    return sequelize.define('usuario', {
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
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nit: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    tableName: 'usuario',
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
  }) as typeof usuario;
  }
}
