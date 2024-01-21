import { IconCheckPaylikCard } from "../icons/paylink.page";

export type CardDataPaylinkProps = {
    setScreenVisible: React.Dispatch<React.SetStateAction<"data" | "form">>
}


const CardDataPaylink = (props:CardDataPaylinkProps):React.JSX.Element => {


    return<>
        <div className="m-2 md:m-4 p-2 md:p-4 relative min-h-[400px]  rounded-[9px] min-w-[300px] w-[100%] max-w-[650px]  bg-white">

            <div className="w-[100%] concepts-container flex flex-wrap p-2 md:p-4">

                <div className="concepts-data w-[100%] md:w-[60%]  ">
                    <div className="w-[100%] title text-[16px] md:text-[18px] text-[#6e6e6e]">
                        Por concepto de
                    </div>

                    <h1 className="flex text-[18px] md:text-[24px] items-center font-bold mb-2 mt-1">
                        <span className="mr-2">
                            <IconCheckPaylikCard />
                        </span>
                            Servicios de diseño grafico
                    </h1>
                    <h1 className="flex text-[18px] md:text-[24px] items-center font-bold mb-2 mt-1">
                        <span className="mr-2">
                            <IconCheckPaylikCard />
                        </span>
                            Servicios de diseño grafico
                    </h1>

                </div>

                <div className="btn-ver-mas w-[100%] md:w-[40%] flex items-center justify-center mt-2 md:mt-0">
                    <button className="rounded-[6px] w-[100%] md:w-[70%] h-[46px] bg-[#5A8302] text-white flex justify-center items-center">
                        Ver más
                    </button>
                </div>

            </div>

            <hr className="w-[94%] ml-[3%] h-[1px] bg-[#e6e6e6] mt-2 mb-2"></hr>

            <div className="w-[100%] prices-container flex flex-col  p-2 md:p-4">
                <div className="price-container w-[100%]">
                    <div className="title text-[16px] md:text-[18px] text-[#6e6e6e]">
                        Por la suma de
                    </div>
                    <h1 className="text-[24px] md:text-[34px] font-bold text-black">
                        $ 694.000 COP
                    </h1>
                </div>
                <div className="iva-container w-[100%]">
                    <div className="title text-[16px] md:text-[18px] text-[#6e6e6e]">
                        IVA
                    </div>
                    <h1 className="text-[18px] md:text-[24px] font-bold text-black">
                        IVA Incluido <span className="text-[#5A8302] text-[14px] md:text-[16px]">{'(19%)'}</span>
                    </h1>
                </div>
            </div>

            <hr className="w-[94%] ml-[3%] h-[1px] bg-[#e6e6e6] mt-2 mb-2"></hr>

            <div className="seller w-[100%]  flex flex-col  p-2 md:p-4">
                <div className="seller-info w-[100%]">
                    <div className="title text-[16px] md:text-[18px] text-[#6e6e6e]">
                        Monto adeudado a
                    </div>
                    <h1 className="text-[18px] md:text-[24px] font-bold text-black">
                        Juanito Perez Diaz
                    </h1>
                </div>
            </div>

            <hr className="w-[94%] ml-[3%] h-[1px] bg-[#e6e6e6] mt-2 mb-2"></hr>

            <div className="actions-links w-[100%]  flex flex-col  p-2 md:p-4">
                <div className="mobile w-[100%] flex justify-center ">
                    <button onClick={()=>props.setScreenVisible("form")} className="text-[20px] font-bold w-[100%] h-[60px] rounded-[9px] bg-[#4900FF] text-white flex justify-center items-center">
                        Sigiente
                    </button>
                </div>

            </div>



        </div>

    </>

};

export default CardDataPaylink;