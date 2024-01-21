import { IconArrowReturn, IconDownloadBillStatement } from "../icons/paylink.page";

export type CardFormPaylinkProps = {
    setScreenVisible: React.Dispatch<React.SetStateAction<"data" | "form">>
}

const CardFormPaylink = (props:CardFormPaylinkProps):React.JSX.Element => {

    return<>
        <div className="m-2 md:m-4 p-2 md:p-4 relative min-h-[400px]  rounded-[9px] min-w-[300px] w-[100%] max-w-[650px]  bg-white">


            
            <div onClick={()=>props.setScreenVisible("data")} className="w-[100%] prices-container flex items-center   p-2 md:p-4 cursor-pointer">
                <span className="mr-2 ml-1"><IconArrowReturn/></span>
                <h1 className="text-[17px] md:text-[18px] font-bold text-black">
                   Volver
                </h1>
                
            </div>
            <hr className="w-[94%] ml-[3%] h-[1px] bg-[#e6e6e6]  block"></hr>
            
            <div className="w-[100%] prices-container flex flex-col  p-2 md:p-4">
                <div className="price-container w-[100%]">
                    <div className="title text-[16px] md:text-[18px] text-[#6e6e6e]">
                        Total a pagar
                    </div>
                    <h1 className="text-[24px] md:text-[34px] font-bold text-black">
                        $ 694.000 COP
                    </h1>
                </div>

                
                
            </div>


            <hr className="w-[94%] ml-[3%] h-[1px] bg-[#e6e6e6]"></hr>

            <form className="w-[100%] p-2 md:p-4">


                <div className="inputs w-[100%]">
                    <span className="mt-2 mb-4 block" >
                        <label className="text-[16px] text-[#6e6e6e]">Nombre del pagador</label>
                        <input placeholder=" Ej: " type="text" className="w-[100%] h-[48px] bg-[#e6e6e6] border border-[#6e6e6e]  rounded-[9px]" />
                    </span>
                    <span className="mt-2 mb-4 block" >
                        <label className="text-[16px] text-[#6e6e6e]">N° de Identificación</label>
                        <span className="flex justify-between">
                            <select className="w-[60px] h-[48px] bg-[#e6e6e6] rounded-[9px] border border-[#6e6e6e]">
                                <option  defaultValue="NIT">NIT</option>
                                <option  defaultValue="CC">CC</option>
                            </select>
                            <input type="text" className="w-[80%] h-[48px] bg-[#e6e6e6] border border-[#6e6e6e]  rounded-[9px]" />

                        </span>
                    </span>
                    <span className="mt-2 mb-4 block" >
                        <label className="text-[16px] text-[#6e6e6e]">Correo electrónico</label>
                        <input type="text" className="w-[100%] h-[48px] bg-[#e6e6e6] border border-[#6e6e6e]  rounded-[9px]" />
                    </span>
                    
                </div>

                <div className="actions-links w-[100%]  flex flex-col  mt-8">
                    
                    <div className="desktop w-[100%] flex justify-center ">
                        <button className="text-[18px] md:text-[20px] font-bold w-[100%] h-[60px] rounded-[9px] bg-[#4900FF] text-white flex justify-center items-center">
                            Pagar ahora
                        </button>
                    
                    </div>
                </div>
                <div className="w-[100%] flex justify-center  mt-8">
                    <p className="link-download w-[90%] ml-[5%] flex justify-center items-center text-[#6e6e6e] cursor-pointer">
                        Descargar cuenta de cobro 
                        <span className="ml-2">
                            <IconDownloadBillStatement />
                        </span>
                    </p>
                </div>
            </form>




        </div>

    </>

};

export default CardFormPaylink;