import { useEffect } from "react";
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';


export interface PropsPaymentMethods {
  creditCard: string;
  debitCard: string;
  ticket: string;
  bankTransfer: string;
  mercadoPago: string;
  maxInstallments: number;

}

const MercadopagoProvider = (props:{methods:PropsPaymentMethods}):JSX.Element => {



    useEffect(() => {
        initMercadoPago('APP_USR-cc500aec-8c5d-4e32-9b58-a11513eae20e',{locale: 'es-CO'})
    },[])

    const initialization = {
        amount: 10000,
        preferenceId: "1439352274-a7f40675-fb61-4efa-b071-686ffa27d0c4",
       };
       // @ts-ignore
       const onSubmit = async ({ selectedPaymentMethod, formData } ) => {

        // callback llamado al hacer clic en el botón enviar datos
        return new Promise((resolve, reject) => {
          fetch("/process_payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((response) => {
              // recibir el resultado del pago
              console.log(response);
              resolve(void 0);
            })
            .catch((error) => {
              // manejar la respuesta de error al intentar crear el pago
              console.log(error);
              reject();
            });
        });
       };
       const onError = async (error:any) => {
        // callback llamado para todos los casos de error de Brick
        console.log(error);
       };
       const onReady = async () => {

        console.log("onReady");
        /*
          Callback llamado cuando el Brick está listo.
          Aquí puede ocultar cargamentos de su sitio, por ejemplo.
        */
       };

    return<>
        <Payment
            initialization={initialization}
            customization={{paymentMethods: props.methods as PropsPaymentMethods | any }}
            onSubmit={onSubmit}
            onReady={onReady}
            onError={onError}
        />

    </>
}


export default MercadopagoProvider;