
import { IconStatePayment } from "../icons/state.payment";


export type CardStatePaymentProps = {

    state: "pending" | "success" | "failed";
    id: string;
    provider: string;
    status: string;
    amount: string;
    preferenceId: string;
    color: string;
}

const CardStatePayment = (props:CardStatePaymentProps):React.JSX.Element => {

   

    
    return<>
        <div className="min-w-[290px] w-[100%] max-w-[650px] min-h-[360px] h-[540px] md:h-[400px] bg-white rounded-[9px] flex items-center justify-center">
            <div className="container w-[96%] h-[96%] flex flex-col items-start">

                <div className="section-title w-[100%] h-[48%] flex flex-wrap justify-around">

                    <div className="icon w-[80%] md:w-[30%] min-w-[160px] flex justify-center items-center">
                        <IconStatePayment status={props.state} color={props.color}/>
                    </div>

                    <div className="texts w-[90%] md:w-[70%] flex items-center justify-center flex-col">
                        <h1 style={{color:props.color}} className="title text-[34px] md:text-[45px] font-bold">
                            Pago Exitoso
                        </h1>
                        <p className="preference-id text-[15px] md:text-[18px] font-semibold text-[#6e6e6e] w-[90%] md:w-[80%]">
                            <span className="text-black">Id orden:</span> {props.preferenceId}
                        </p>
                    </div>

                </div>


                <div className="section-hr ml-[5%] w-[90%] h-[1px] bg-[#e6e6e6]"></div>


                <div className="section-data w-[100%] h-[48%] flex items-center justify-center">
                    <div className="info-pay flex flex-col text-[16px] md:text-[18px] font-semibold w-[100%]">
                        <div className="info mt-2 mb-2 flex justify-around w-[100%]">
                            <p>Id pago:</p>
                            <p className="data  text-[#6e6e6e]">123456789</p>
                        </div>
                        <div className="info mt-2 mb-2 flex justify-around w-[100%]">
                            <p>Proveedor</p>
                            <p className="data  text-[#6e6e6e]">Mercadopago</p>
                        </div>
                        <div className="info mt-2 mb-2 flex justify-around w-[100%]">
                            <p>Estado</p>
                            <p className="data   text-[#6e6e6e]">Aprobado</p>
                        </div>
                        <div className="info mt-2 mb-2 flex justify-around w-[100%]">
                            <p>Monto</p>
                            <p className="data  text-[#6e6e6e]">$ 60.000 COP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default CardStatePayment;