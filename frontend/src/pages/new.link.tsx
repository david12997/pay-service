
import { useState } from "react";
import CardCreateLink from "../components/cards/card.create.link";
import NaigationApp from "../components/common/navigation.card";
import Input1 from "../components/inputs/input.1";
import { HexColorPicker } from "react-colorful";



const NewLinkPage = ():JSX.Element => {

    const [step, setStep] = useState<number>(0);
    const [color, setColor] = useState<string>("#602ae8");
    const [changeColor, setChangeColor] = useState<boolean>(false);

    const myformData = new FormData();

    return<>
        <section className="w-screen h-screen">

            <NaigationApp/>
            <div className="pt-4 md:pt-0 relative container-page h-[100%] w-[80%] ml-[20%] md:ml-[15%] border border-black overflow-y-scroll overflow-x-hidden">
                <h1 className="text-[18px] text-[#6e6e6e] m-2 md:m-8 font-semibold">Crear link de pago</h1>

               
                <CardCreateLink
                    steps={4}
                    step={0}
                    title="Antes de empezar"
                    button_text="Siguiente"
                    addItmes={true}

                >

                    <div className="first-view w-[100%] hidden">
                        <p className="w-[96%] ml-[2%] text-[18px] md:text-[20px] font-normal text-[#6e6e6e]">
                            Vas a necesitar el <span className="text-[#4900FF]">access token</span> de tu aplicación de mercadopago.
                            Recuerda que manetemos tu access token cifrado, dentro de la aplicación solo podras ver el token cifrado, no el original.
                            <br></br>
                            
                            Ejemplo credenciales mercadopago
                        </p>
                        <img className="w-[100%] mt-4" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/i7qyqr92928ko0ww" alt="imagen access token mercadopago" />


                    </div>

                    <div className="second-view w-[100%] hidden">
                        <p className="w-[96%] ml-[2%] text-[18px] md:text-[20px] font-normal text-[#6e6e6e]">
                            Vas a necesitar añadir la url de notificaciones similar a 
                            <span className="text-[#4900FF] max-w-[250px] break-words"> dominio.com/api/v1/notifications/mercadopago </span> 
                            y debes añadir el evento <strong>Pagos</strong>
                            <br></br>
                            
                            Ejemplo configuración webhooks mercadopago
                        </p>
                        
                        <img className="w-[100%] mt-4" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/rjs3sl1q8lwso8ow" alt="imagen access token mercadopago" />

                    </div>

                    <div className="view-3 w-[90%] ml-[5%] hidden">
                        <h1 className="text-[#0B6F88] w-[100%] h-[60px] mt-[10%] text-[24px] md:text-[33px] text-center font-bold">
                            Añadir access token de mercadopago
                        </h1>
                        <div className="container-input w-[100%] flex items-center justify-center mt-10 md:mt-4">
                        <input placeholder="Ej: APP-*****" className="w-[100%] md:w-[450px] h-[60px] bg-[#e6e6e6]  border border-[#e6e6e6] rounded-[9px]" type="text"/>

                        </div>
                    </div>

                    <div className="view-4 w-[90%] ml-[5%] hidden">
                        <h1 className="text-[#0B6F88] w-[100%] h-[60px] mt-[10%] text-[24px] md:text-[33px] text-center font-bold">
                            Añadir access token de mercadopago
                        </h1>
                        <div className="container-input w-[100%] flex items-center justify-center mt-10 md:mt-4">
                        <input placeholder="Ej: APP-*****" className="w-[100%] md:w-[450px] h-[60px] bg-[#e6e6e6]  border border-[#e6e6e6] rounded-[9px]" type="text"/>

                        </div>
                    </div>

                    <div className="view-5 w-[100%] hidden">
                        <h1 className="text-[#0B6F88] w-[100%] h-[60px] mt-[10%] text-[24px] md:text-[33px] text-center font-bold">
                           ¿Qué quieres vender?
                        </h1>
                        <div className="contauner-buttons w-[100%] mt-4 flex items-center justify-center flex-wrap">
                            <button className="min-w-[200px] max-w-[360px] h-[50px] rounded-[9px] bg-[#e6e6e6] m-2">
                                <p className="text-[18px] md:text-[20px] font-bold text-[#6e6e6e]">Productos</p>
                            </button>
                            <button className="min-w-[200px] max-w-[360px] h-[50px] rounded-[9px] bg-[#e6e6e6] m-2">
                                <p className="text-[18px] md:text-[20px] font-bold text-[#6e6e6e]">Servicios</p>
                            </button>
                        </div>
                    </div>

                    <div className="view-6 w-[100%] hidden">
                        <div className="contauner-buttons w-[100%]  flex flex-col items-center justify-center flex-wrap mt-20">
                            <button className="min-w-[260px] max-w-[420px] h-[50px] rounded-[9px] bg-[#5A8302] m-2">
                                <p className="text-[18px] md:text-[20px] font-semibold text-white">Crear producto </p>
                            </button>
                            <button className="min-w-[260px] max-w-[420px] h-[50px] rounded-[9px] bg-[#0B6F88] m-2">
                                <p className="text-[18px] md:text-[20px] font-semibold text-white">Añadir del inventario</p>
                            </button>
                        </div>
                    </div>

                    <div className="view-form-products w-[100%] ">
                        <form className="w-[96%] ml-[2%]  flex flex-wrap justify-start mt-4 mb-4" onSubmit={(e)=>e.preventDefault()}>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="text" placeholder="Ej: Camiseta XL" label="Nombre del producto" width="100%" />
                            </div>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="number" placeholder="Ej: 500000" label="Precio" width="100%" />
                            </div>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="number" placeholder="Ej: 19" label="IVA(%)" width="60%" />
                            </div>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="text" placeholder="Ej: venta de par de camisetas cliente juan" label="Breve descripción" width="100%" />
                            </div>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="file" placeholder="Añadir foto" label="Seleccionar archivo" width="100%" />
                            </div>

                            <div className="w-[90%] m-2  md:w-[30%] p-2 flex flex-col">
                                <label className="text-[#6e6e6e]">Envío</label>
                                <select className="w-[100%] h-[54px] rounded-[6px] bg-[#e6e6e6] border border-[#e6e6e6]">
                                   <option className="">Si</option>
                                   <option className="">No</option>

                                </select>
                            </div>

                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="number" placeholder="Ej: 26000" label="Precio del envío" width="100%" />
                            </div>
                            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                                <Input1 formData={myformData} type="number" placeholder="Ej: 5" label="Stok disponible" width="100%" />
                            </div>

                            
                            
                              
                        </form>
                    </div>

                    <div className="view-7 w-[100%] hidden">
                        <div className="contauner-buttons w-[100%]  flex flex-col items-center justify-center flex-wrap mt-20">
                            <button className="min-w-[260px] max-w-[420px] h-[50px] rounded-[9px] bg-[#5A8302] m-2">
                                <p className="text-[18px] md:text-[20px] font-semibold text-white">Crear otro producto </p>
                            </button>
                            <button className="min-w-[260px] max-w-[420px] h-[50px] rounded-[9px] bg-[#0B6F88] m-2">
                                <p className="text-[18px] md:text-[20px] font-semibold text-white">Añadir del inventario</p>
                            </button>
                        </div>
                    </div>

                    <div className="view-8 w-[100%] mb-[100px] hidden">
                       
                       <>
                        <section className="example-screen w-[100%] h-[300px] bg-[#e6e6e6] mt-8 relative ">
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
                       <div className=" w-[90%] ml-[5%] h-[50px] md:w-[50%] md:ml-[25%] mt-[18px] mb-[10px]">
                           <input style={{color:color}} readOnly value={`Color principal:${color}`} className="w-[100%] h-[48px] bg-[#e6e6e6] border border-[#e6e6e6] rounded-[6px] "/>
                       </div>
                        
                        <button onMouseEnter={()=>setChangeColor(!changeColor)} onMouseLeave={()=>setChangeColor(!changeColor)} className="relative w-[90%] ml-[5%] h-[50px] md:w-[46%] md:ml-[27%] bg-[#0B6F88]  font-semibold text-white rounded-[6px]">
                            Elegir color
                            {
                                changeColor
                                &&
                                <HexColorPicker className="top-[-140px] left-[5%] md:left-[25%]" style={{position:'absolute'}} color={color} onChange={setColor} />
                            }
                           
                        </button>
                       
                        
                    </div>

                    <div className="view-9 w-[100%] mb-[130px] md:mb-[50px] hidden">
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
                    
                </CardCreateLink>



            </div>
           
        </section>
    
    </>
};

export default NewLinkPage;