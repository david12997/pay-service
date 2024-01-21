import React from "react";
import { IconButtonStatePayment } from "../icons/state.payment";


export interface ButtonStatePaymentProps {
    state: "pending" | "success" | "failed";
    color: string;
}

const ButtonStatePayment = (props: ButtonStatePaymentProps):React.JSX.Element => {

    return<>
        <div style={{background:props.color}} className="cursor-pointer min-w-[290px] w-[100%] max-w-[650px] h-[70px] rounded-[9px] flex justify-center items-center">
                <p className="text-white ml-2 mr-2 text-[22px] font-semibold">Descargar factura</p>
                <IconButtonStatePayment status={props.state} color={props.color}/>
        </div>
    </>
}

export default ButtonStatePayment;