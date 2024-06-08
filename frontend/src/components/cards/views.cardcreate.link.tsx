import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useAppDispatch, useAppSelector } from "../../store";
import SetTypePaylink from "../../services/set.type.paylink";
import CreateProductForm from "../forms/create.product";
import CreateServiceForm from "../forms/create.service";

export interface Step{
    view:number,
    data_view4?:{
        createProductOrService:()=>void,
        newProductOrService:()=>void
    }
}

export  const Step0 = (props:Step):React.JSX.Element | null => {

       // Si view no es 1 o 2, no renderizar nada
       if (props.view !== 1 && props.view !== 2) {
        return null;
    }


    return<>

        {
            props.view === 1 ?
            <>
            <div className="view-1 w-[100%] ">
                <p className="w-[96%] ml-[2%] text-[18px] md:text-[20px] font-normal text-[#6e6e6e]">
                   We gare going to use the mercadopago app <span className="text-[#4900FF]">access token</span> 
                   remember tath we keep your access token encrypted and secure, 
                   within the application you will only be able to see a reference encrypted token.
                    <br></br>
                    
                    Example mercado pago credentials
                </p>
                <img className="w-[100%] mt-4" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/i7qyqr92928ko0ww" alt="imagen access token mercadopago" />


            </div>
            </>
            :
            <>
            <div className="view-2 w-[100%] ">
                <p className="w-[96%] ml-[2%] text-[18px] md:text-[20px] font-normal text-[#6e6e6e]">
                    We need to add the url link notification similar to 
                    <span className="text-[#4900FF] max-w-[250px] break-words"> domain.com/api/v1/notifications/mercadopago </span> 
                    dont forget to add  <strong>Pagos</strong> envent
                    <br></br>
                    
                   Example webhooks mercadopago set up
                </p>
                
                <img className="w-[100%] mt-4" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/rjs3sl1q8lwso8ow" alt="imagen access token mercadopago" />

            </div>
            
            </>

        }




    </>
}


export const Step1 = (props:Step):React.JSX.Element | null => {

    if(props.view !== 3) return null;

    return<>
    
        <div className="view-3 w-[90%] ml-[5%] ">
            <h1 className="text-[#0B6F88] w-[100%] h-[60px] mt-[10%] text-[24px] md:text-[33px] text-center font-bold">
                Añadir access token de mercadopago
            </h1>
            <div className="container-input w-[100%] flex items-center justify-center mt-10 md:mt-4">
            <input placeholder="Ej: APP-*****" className="w-[100%] md:w-[450px] h-[60px] bg-[#e6e6e6]  border border-[#e6e6e6] rounded-[9px]" type="text"/>

            </div>
        </div>

    </>
}

export const Step2 = (props:Step):React.JSX.Element | null => {

    const views:number[] = [4,5,6,7]; 

    if(!views.includes(props.view)) return null;

    
    const statePayLink = useAppSelector(state => state.paylink);
    const dispatch = useAppDispatch();

    const handleTypePaylink = (type:"product" | "service") => SetTypePaylink(type,dispatch);
    

    return<>

        {
            props.view === 4 
            ?
            <>
            <div className="view-4 w-[100%] ">
                <h1 className="text-[#0B6F88] w-[100%] h-[60px] mt-[10%] text-[24px] md:text-[33px] text-center font-bold">
                    ¿Qué quieres vender?
                </h1>
                <div className="contauner-buttons w-[100%] mt-4 flex items-center justify-center flex-wrap">
                    <button onClick={()=>{
                        handleTypePaylink("product");
                        props.data_view4?.createProductOrService();

                    }} className="min-w-[200px] max-w-[360px] h-[50px] rounded-[9px] bg-[#e6e6e6] m-2">
                        <p className="text-[18px] md:text-[20px] font-bold text-[#6e6e6e]">Productos</p>
                    </button>
                    <button onClick={()=>{
                        handleTypePaylink("service");
                        props.data_view4?.createProductOrService();
                    
                    }} className="min-w-[200px] max-w-[360px] h-[50px] rounded-[9px] bg-[#e6e6e6] m-2">
                        <p className="text-[18px] md:text-[20px] font-bold text-[#6e6e6e]">Servicios</p>
                    </button>
                </div>
            </div>
            </>
            :
            props.view === 5
            ?
            <>
            <div className="view-5 w-[100%] ">
                <div className="contauner-buttons w-[100%]  flex flex-col items-center justify-center flex-wrap mt-20">
                    <button onClick={props.data_view4?.newProductOrService} className="min-w-[230px] max-w-[420px] h-[50px] rounded-[9px] bg-[#5A8302] m-2">
                        <p className="text-[18px] md:text-[20px] font-semibold text-white">{
                            statePayLink.type === "product" ? "Crear producto" : "Crear servicio"
                        } </p>
                    </button>
                    <button className="min-w-[230px] max-w-[420px] h-[50px] rounded-[9px] bg-[#0B6F88] m-2">
                        <p className="text-[18px] md:text-[20px] font-semibold text-white">Añadir del inventario</p>
                    </button>
                </div>
            </div>
            </>
            :
            props.view === 6
            ?
            <>
            <div className="view-6 view-form-products w-[100%] ">
                {
                    statePayLink.type === "product"
                    ? <CreateProductForm />
                    : <CreateServiceForm/>

                }
                
            </div>
                
            </>
            :
            <>
            
            <div className="view-7 w-[100%] ">
                <div className="contauner-buttons w-[100%]  flex flex-col items-center justify-center flex-wrap mt-20">
                    <button className="min-w-[230px] max-w-[420px] h-[50px] rounded-[9px] bg-[#5A8302] m-2">
                        <p className="text-[18px] md:text-[20px] font-semibold text-white">{
                            statePayLink.type === "product" ? "Crear otro producto" : "Crear otro servicio"
                        } </p>
                    </button>
                    <button className="min-w-[230px] max-w-[420px] h-[50px] rounded-[9px] bg-[#0B6F88] m-2">
                        <p className="text-[18px] md:text-[20px] font-semibold text-white">Añadir del inventario</p>
                    </button>
                </div>
            </div>
                
            </>

        }
        



        

        
    
    </>
}

export const Step3 = (props:Step):React.JSX.Element | null => {

    const [color, setColor] = useState<string>("#602ae8");
    const [changeColor, setChangeColor] = useState<boolean>(false);

    if(props.view !== 8) return null;

    return<>
    <div className="view-8 w-[100%] mb-[100px] ">
         
        <>
        <section className="example-screen w-[100%] h-[300px] bg-[#e6e6e6] mt-2 relative ">
            <div style={{color:color,background:color}} className="banner w-[100%] h-[120px] ">
                banner
            </div>
            <div className="card-prueba absolute md:w-[50%] md:ml-[25%] w-[90%] ml-[5%] h-[170px] bg-white text-white top-[40px] rounded-[9px]">
                card
            </div>
            <div style={{color:color,background:color}}  className=" btn-[#602AE8] absolute bottom-[20px] md:w-[50%] h-[45px] md:ml-[25%] w-[90%] ml-[5%] rounded-[6px]">
                btn
            </div>
        </section>
        </>
        <button onMouseEnter={()=>setChangeColor(!changeColor)} onMouseLeave={()=>setChangeColor(!changeColor)} className="relative w-[100%] h-[50px] mt-4 bg-[#0B6F88]  font-semibold text-white rounded-[6px]">
            Elegir color
            {
                changeColor
                &&
                <HexColorPicker className="top-[-140px] left-[5%] md:left-[25%]" style={{position:'absolute'}} color={color} onChange={setColor} />
            }
            
        </button>  
        
        
    </div>

    </>
}

export const Step4 = (props:Step):React.JSX.Element | null => {

    if(props.view !== 9) return null;

    return<>
    
        <div className="view-9 w-[100%] mb-[130px] md:mb-[50px] ">
            <h1 className="text-[24px] md:text-[28px] font-bold flex items-center justify-center h-[45px] mt-4 text-[#0B6F88]">
                Configuración
            </h1>

            
            <div className="personalizar-url flex flex-wrap w-[100%] justify-center ">
                <div className=" w-[90%] ml-[5%] h-[50px] md:w-[40%]  mt-[28px]">
                    <label className="text-[#6e6e6e]">URL base</label>
                    <input  readOnly value={`tudominio.com/paylinks/`} className="w-[100%]  h-[48px] bg-[#a4a4a4] border border-[#f5f5f5] rounded-[6px] "/>
                </div>
                <div className=" w-[90%] ml-[5%] h-[50px] md:w-[40%]   mt-[30px] ">
                    <label className="text-[#6e6e6e]">Personaliza url path</label>
                    <input  placeholder="Ej: /camisetas-juan"  className="w-[100%]  h-[48px] bg-[#e6e6e6] border border-[#e6e6e6] rounded-[6px] "/>
                </div>

                <div className="tipo-link w-[100%] flex flex-col  mt-10">
                    <label className="w-[90%] ml-[5%] md:ml-[10%] text-[#6e6e6e]">Tipo de  link</label>
                    <select className="w-[90%] ml-[5%] h-[50px] md:ml-[10%] md:w-[40%] rounded-[6px] bg-[#e6e6e6] border border-[#e6e6e6]">
                        <option>Link privado</option>
                        <option>Link público</option>
                        
                    </select>
                    <label className="w-[90%] ml-[5%] md:ml-[10%] text-[#6e6e6e] mt-4">Contraseña</label>
                    <input  placeholder="Ej: *******"  className="w-[90%] ml-[5%]  h-[50px] md:ml-[10%] md:w-[40%] bg-[#e6e6e6] border border-[#e6e6e6] rounded-[6px] "/>

                </div>

            </div>

            

        </div>
    
    </>

}