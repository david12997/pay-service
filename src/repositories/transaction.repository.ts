
import { transaccion } from '../models/transaccion'; // Asegúrate de que el modelo User esté importado correctamente

export class TransaccionRespository {
    async findById(id: number): Promise<transaccion | null> {
        return transaccion.findByPk(id);
    }

    // ... más métodos CRUD

    async create(data: transaccion): Promise<transaccion> {
        return transaccion.create(data);
    }

    async update(id: number, data: transaccion): Promise<transaccion | null> {
        const provaider = await transaccion.findByPk(id);
        if (!provaider) return null;
        return provaider.update(data);
    }   

    async delete(id: number): Promise<void> {
        const provaider = await transaccion.findByPk(id);
        if (!provaider) return;
        await provaider.destroy();
    }

    async findAll(): Promise<transaccion[]> {
        return transaccion.findAll();
    }

    async findByOwner(owner: number): Promise<transaccion | null> {
        return transaccion.findOne({ where: { owner } });
    }

    async findByName(id_provaider: number): Promise<transaccion | null> {
        return transaccion.findOne({ where: { id_provaider } });
    }


}