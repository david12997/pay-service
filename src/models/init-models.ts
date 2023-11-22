import type { Sequelize } from "sequelize";
import { servicios as _servicios } from "./servicios";
import type { serviciosAttributes, serviciosCreationAttributes } from "./servicios";

export {
  _servicios as servicios,
};

export type {
  serviciosAttributes,
  serviciosCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const servicios = _servicios.initModel(sequelize);


  return {
    servicios: servicios,
  };
}
