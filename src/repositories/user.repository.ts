
import { usuario } from '../models/usuario'; // Asegúrate de que el modelo User esté importado correctamente

export class UserRepository {
    async findById(id: number): Promise<usuario | null> {
        return usuario.findByPk(id);
    }

    // ... más métodos CRUD

    async create(data: usuario): Promise<usuario> {
        return usuario.create(data);
    }

    async update(id: number, data: usuario): Promise<usuario | null> {
        const user = await usuario.findByPk(id);
        if (!user) return null;
        return user.update(data);
    }   

    async delete(id: number): Promise<void> {
        const user = await usuario.findByPk(id);
        if (!user) return;
        await user.destroy();
    }

    async findAll(): Promise<usuario[]> {
        return usuario.findAll();
    }

    async findByEmail(email: string): Promise<usuario | null> {
        return usuario.findOne({ where: { email } });
    }

    async findByEmailAndPassword(email: string, password: string): Promise<usuario | null> {
        return usuario.findOne({ where: { email, password } });
    }

    async findByPhone(phone: number): Promise<usuario | null> {
        return usuario.findOne({ where: { phone } });
    }

    async findByPhoneAndPassword(phone: number, password: string): Promise<usuario | null> {
        return usuario.findOne({ where: { phone, password } });
    }

    async findByNit(nit: number): Promise<usuario | null> {
        return usuario.findOne({ where: { nit } });
    }

    async findByNitAndPassword(nit: number, password: string): Promise<usuario | null> {
        return usuario.findOne({ where: { nit, password } });
    }

    async findByOwner(owner: number): Promise<usuario | null> {
        return usuario.findOne({ where: { owner } });
    }

    

}