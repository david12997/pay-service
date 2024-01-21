import { useEffect } from "react";

import StructureStatePayment from "../components/structures/state.payment";
import parseQueryStringQueryParams from "../helpers/parsequery.state.py";


export type PayStatePageProps = {
    state:"success" | "pending" | "failed";
}

export type CheckoutProResponse = {
    collection_id: string;
    collection_status: 'approved' | 'in_process' | 'rejected'; 
    payment_id: string;
    status: 'approved' | 'in_process' | 'rejected'; 
    external_reference: string;
    payment_type: 'credit_card' | 'debit_card' | string; 
    merchant_order_id: string;
    preference_id: string;
    site_id: string;
    processing_mode: 'aggregator' | string; 
    merchant_account_id: string;
};

const PayStatePage = (props:PayStatePageProps):React.JSX.Element => {

    useEffect(() => {
       const cleanSearchString = window.location.search.split("?")[1];
       console.log(parseQueryStringQueryParams(cleanSearchString));
    },[]);



    return<>
        <main className='w-screen h-screen bg-[#dbdbdb] p-2 overflow-y-scroll'>


            {
                props.state === "success"
                &&
                <StructureStatePayment

                    cardStatePayment={{
                        state:"success",
                        id:"123456789",
                        provider:"Mercadopago",
                        status:"Aprobado",
                        amount:"$ 60.000 COP",
                        preferenceId:"123456789",
                        color:"#5A8302"
                    
                    }}

                    buttonStatePayment={{
                        state:"success",
                        color:"#5A8302"
                    }}
                
                />
            }
           
            {
                props.state === "pending"
                &&
                <StructureStatePayment

                    cardStatePayment={{
                        state:"pending",
                        id:"123456789",
                        provider:"Mercadopago",
                        status:"Pendiente",
                        amount:"$ 60.000 COP",
                        preferenceId:"123456789",
                        color:"#FFA800"
                    
                    }}

                    buttonStatePayment={{
                        state:"pending",
                        color:"#FFA800"
                    }}

                />

            }
            
            {
                props.state === "failed"
                &&
                <StructureStatePayment

                    cardStatePayment={{
                        state:"failed",
                        id:"123456789",
                        provider:"Mercadopago",
                        status:"Rechazado",
                        amount:"$ 60.000 COP",
                        preferenceId:"123456789",
                        color:"#BD0000"
                    
                    }}

                    buttonStatePayment={{
                        state:"failed",
                        color:"#BD0000"
                    }}
                    
                />
            }

        </main>
    </>
}

export default PayStatePage;