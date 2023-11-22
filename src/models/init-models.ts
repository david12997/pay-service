import type { Sequelize } from "sequelize";
import { proveedor as _proveedor } from "./proveedor";
import type { proveedorAttributes, proveedorCreationAttributes } from "./proveedor";
import { transaccion as _transaccion } from "./transaccion";
import type { transaccionAttributes, transaccionCreationAttributes } from "./transaccion";
import { usuario as _usuario } from "./usuario";
import type { usuarioAttributes, usuarioCreationAttributes } from "./usuario";

export {
  _proveedor as proveedor,
  _transaccion as transaccion,
  _usuario as usuario,
};

export type {
  proveedorAttributes,
  proveedorCreationAttributes,
  transaccionAttributes,
  transaccionCreationAttributes,
  usuarioAttributes,
  usuarioCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const proveedor = _proveedor.initModel(sequelize);
  const transaccion = _transaccion.initModel(sequelize);
  const usuario = _usuario.initModel(sequelize);


  return {
    proveedor: proveedor,
    transaccion: transaccion,
    usuario: usuario,
  };
}
