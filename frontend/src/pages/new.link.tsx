
import { useEffect, useState } from "react";
import CardCreateLink from "../components/cards/card.create.link";
import NaigationApp from "../components/common/navigation.card";
import { Step0, Step1, Step2, Step3, Step4 } from "../components/cards/views.cardcreate.link";
import useAuthToken from "../hooks/authorization";
import { useAppSelector } from "../store";



const NewLinkPage = ():JSX.Element => {

    const [step, setStep] = useState<number>(0);
    const [view, setView] = useState<number>(1);
    const authentication = useAuthToken();
    const statePaylink = useAppSelector((state) => state.paylink);

    const handleTitle = (view:number):string => {

        return view === 1 ?  "Antes de empezar"
        : view === 2 ? "Añadir evento"
        : view === 3 ? "Añadir Access Token "
        : view === 4 ? "¿Qué  quieres vender?"
        : view === 5 ? ` ${statePaylink.type === "product" ? "Importar Producto" : "Importar Servicio"}`
        : view === 6 ? ` ${statePaylink.type === "product" ? "Formulario Producto" : "Formulario Servicio"}`
        : view === 7 ? ` ${statePaylink.type === "product" ? "Añadir Producto" : "Añadir Servicio"}`
        : view === 8 ? "Color de la interfaz"
        : view === 9 ? "Configurar link"
        : 'Datos del producto' 
    }


    useEffect(()=>{
        
    },[step,view])

    return<>
        {
            authentication.authToken !== null && authentication.authToken !== undefined
            ?
            <section className="w-screen h-screen">

                <NaigationApp/>
                <div className="pt-4 md:pt-0 relative container-page h-[100%] w-[80%] ml-[20%] md:ml-[15%] border border-black overflow-y-scroll overflow-x-hidden">
                    <h1 className="text-[18px] text-[#6e6e6e] m-2 md:m-8 font-semibold">Crear link de pago</h1>

                    <CardCreateLink
                        view={view}
                        steps={4}
                        step={step}
                        title={handleTitle(view)}
                        button_text="Siguiente"
                        addItmes={false}
                        clickButtoNext={()=>{

                            if(view === 2)setStep(step+1);
                            if(view === 3)setStep(step+1);
                            if(view === 7)setStep(step+1);
                            if(view === 8)setStep(step+1);
                            setView(view+1);
                        }}
                        clickButtoBack={()=>{
                            if(view === 3) setStep(0);
                            if(view === 4)setStep(1);
                            if(view === 8) setStep(2);
                            if(view === 9)setStep(3);
                            setView(view-1);
                        
                        }}

                    

                    >

                        {
                            step === 0 && <Step0 view={view} />
                        }

                        {
                            step === 1 && <Step1 view={view} />
                        }
                        {
                            step === 2 && <Step2 view={view} data_view4={{createProductOrService:()=>{
                                setView(5);
                            
                            }}} />
                        }

                        {
                            step === 3 &&  <Step3 view={view} />
                        }
                        {
                            step === 4 &&  <Step4 view={view} />
                        }

                        
                    </CardCreateLink>

                </div>
            
            </section>
            :
            <></>

        }
  
    </>
};

export default NewLinkPage;