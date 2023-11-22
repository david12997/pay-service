
import { proveedor } from '../models/proveedor'; // Asegúrate de que el modelo User esté importado correctamente

export class ProvaiderPayRepository {
    async findById(id: number): Promise<proveedor | null> {
        return proveedor.findByPk(id);
    }

  // ... más métodos CRUD
    
        async create(data: proveedor): Promise<proveedor> {
            return proveedor.create(data);
        }
    
        async update(id: number, data: proveedor): Promise<proveedor | null> {
            const provaider = await proveedor.findByPk(id);
            if (!provaider) return null;
            return provaider.update(data);
        }   
    
        async delete(id: number): Promise<void> {
            const provaider = await proveedor.findByPk(id);
            if (!provaider) return;
            await provaider.destroy();
        }
    
        async findAll(): Promise<proveedor[]> {
            return proveedor.findAll();
        }
    
        async findByOwner(owner: number): Promise<proveedor | null> {
            return proveedor.findOne({ where: { owner } });
        }

        async findByName(name: string): Promise<proveedor | null> {
            return proveedor.findOne({ where: { name } });
        }


}