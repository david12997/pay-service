import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface transaccionAttributes {
  id: number;
  status: string;
  owner?: number;
  created_on?: Date;
  id_provaider: number;
  transaccion_usuario?: number;
  data_remitente: string;
  data_destinatario: string;
  data_transaccion?: string;
}

export type transaccionPk = "id";
export type transaccionId = transaccion[transaccionPk];
export type transaccionOptionalAttributes = "id" | "status" | "owner" | "created_on" | "transaccion_usuario" | "data_transaccion";
export type transaccionCreationAttributes = Optional<transaccionAttributes, transaccionOptionalAttributes>;

export class transaccion extends Model<transaccionAttributes, transaccionCreationAttributes> implements transaccionAttributes {
  id!: number;
  status!: string;
  owner?: number;
  created_on?: Date;
  id_provaider!: number;
  transaccion_usuario?: number;
  data_remitente!: string;
  data_destinatario!: string;
  data_transaccion?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof transaccion {
    return sequelize.define('transaccion', {
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
    id_provaider: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    transaccion_usuario: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    data_remitente: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_destinatario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    data_transaccion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'transaccion',
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
  }) as typeof transaccion;
  }
}
