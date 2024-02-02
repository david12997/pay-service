import { useEffect } from "react";
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { access } from "fs";


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
      preferenceId: "1439352274-8d466109-40ba-4d15-9fbd-afc65d36ed59",
  };
  // @ts-ignore
  const onSubmit = async ({ selectedPaymentMethod, formData } ) => {
  
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiRGF2aWQiLCJpYXQiOjE3MDYwMzEyNzl9.S-TcbW4VG9BiMK_EdTtfaDEiymvR_rWCgrkehPr2eVo'
    //formData.append('access_token', 'APP_USR-cc500aec-8c5d-4e32-9b58-a11513eae20e')
    // callback llamado al hacer clic en el botón enviar datos
    return new Promise((resolve, reject) => {
      fetch(`${process.env.API_URL}/payments/mercadopago/create/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          seller_email:'developers@aipus.co',
          formData
        }),
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