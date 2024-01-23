import { PaymentRepository } from "./../repositories/payment.repository";
import { DatabaseAdapter } from "./../infrastructure/databases/mysql2.adapter";
import { payment } from "types/payment";


export class PaymentService {


    payment: payment;
    private database: DatabaseAdapter;

    constructor() {
        this.database = new DatabaseAdapter();

        this.payment = {
            owner: 1,
            status: 'draft',
            data_paiment: "",
            provider: "",
            user_provider_id: 0,
        }
    }

    get getPayment(): payment {
        return this.payment
    }

    set setPayment(payment: payment) {
        this.payment = payment
    }

    async create(payment: payment): Promise<any> {

        try {

            this.setPayment = payment;
            await this.database.connect();
            const paymentRepository = new PaymentRepository(this.database.getConnection());

            const newPayment = await paymentRepository.create(this.getPayment);
            return Promise.resolve({
                payment: newPayment,
                status: "success create payment",
                operation: "payment.service create"
            });

        } catch (error: any) {
            return Promise.reject({
                error: error,
                code: 500,
                operation: "payment.service create"
            });
        }
    }

    async update(payment: payment): Promise<any> {

        try {

            this.setPayment = payment;
            await this.database.connect();
            const paymentRepository = new PaymentRepository(this.database.getConnection());

            const newPayment = await paymentRepository.update(this.getPayment);
            return Promise.resolve({
                payment: newPayment,
                status: "success update payment",
                operation: "payment.service update"
            });

        } catch (error: any) {
            return Promise.reject({
                error: error,
                code: 500,
                operation: "payment.service update"
            });
        }
    }

    async delete(id: number): Promise<any> {

        try {

            await this.database.connect();
            const paymentRepository = new PaymentRepository(this.database.getConnection());

            const newPayment = await paymentRepository.delete(id);
            return Promise.resolve({
                payment: newPayment,
                status: "success delete payment",
                operation: "payment.service delete"
            });

        } catch (error: any) {
            return Promise.reject({
                error: error,
                code: 500,
                operation: "payment.service delete"
            });
        }
    }

    async findPaymentById(id: number): Promise<any> {

        try {

            await this.database.connect();
            const paymentRepository = new PaymentRepository(this.database.getConnection());

            const newPayment = await paymentRepository.findPaymentById(id);
            return Promise.resolve({
                payment: newPayment,
                status: "success find payment",
                operation: "payment.service findPaymentById"
            });

        } catch (error: any) {
            return Promise.reject({
                error: error,
                code: 500,
                operation: "payment.service findPaymentById"
            });
        }
    }

}