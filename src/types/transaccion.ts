export type transaccion = {

    id?:number,
    status:string,
    owner:number,
    id_provider:number,
    transaccion_usuario:number,
    data_remitente:string,
    data_destinatario:string,
    data_transaccion:string,
    mercadopago_id?:string,
    mp_preference_id:string,
    merchant_order_id?:number,

}