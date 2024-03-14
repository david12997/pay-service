import { useEffect, useRef, useState } from "react";
import { IcoCrearLink, IconHome, IconInventario, IconProveedores, IconSalir } from "../icons/navigation.app"
import { useNavigate } from "react-router-dom";

const NaigationApp = ():React.JSX.Element => {

    const [activeMenu, setActiveMenu] = useState<boolean>(false);
    const MenuRef = useRef<HTMLDivElement>(null);
    const router = useNavigate();

    useEffect(() => {
        console.log(activeMenu)
    }, [activeMenu])

    const Salir = () => {

        localStorage.clear();
        window.location.reload();
    }

    return<>
        <section onMouseEnter={()=>setActiveMenu(!activeMenu)} 
            onMouseLeave={()=>setActiveMenu(!activeMenu)} 
            ref={MenuRef} 
            className={`fixed z-[99] ${activeMenu ? 'w-[280px]': 'w-[70px] md:w-[100px]' } linear-gradient-bg-navigationapp h-[100vh]`}
        >
            
            {
                activeMenu 
                ?
                <>
                <div className="container-logo flex items-center w-[90%] ml-[5%] bg-white rounded-[9px] p-2 justify-center mt-4">
                    <img className="min-w-[50px] w-[50px]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" alt="logo" />
                    <p className="text-[18px] md:text-[20px] font-extrabold text-[#2E28B7] ml-2">Links de pago</p>
                </div>
                </>
                :
                <>
                    <div className="container-img-mobile flex items-center justify-center w-[100%] h-[54px] mt-4">
                        <span className="block p-1 w-[58px] rounded-[50%] bg-white">
                        <img className="min-w-[50px] w-[50px]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" alt="logo" /> 
                        </span>               
                    </div>
                </>
            }

            

            <div className={`container-options w-[80%] ${activeMenu ?'ml-[10%]' : 'ml-[18%]'} mt-[60px] h-[64%] cursor-pointer`}>
                <ul className="mylist flex flex-col items-center h-[100%] justify-between">
                    <li onClick={()=>router('/home')} className={` ${ activeMenu ? "justify-start" :"justify-center"} w-[100%] flex items-center  text-white font-bold text-[18px] md:text-[20px]`}> 
                        <span className="mr-4"><IconHome/> </span>{ activeMenu ? " Inicio": ""}
                    </li>
                    <li className={` ${ activeMenu ? "justify-start" :"justify-center"} w-[100%] flex items-center  text-white font-bold text-[18px] md:text-[20px]`}>
                        <span className="mr-4"><IconInventario/></span> { activeMenu ? " Inventario": ""} 
                    </li>
                    <li onClick={()=>router('/new-link')} className={` ${ activeMenu ? "justify-start" :"justify-center"} w-[100%] flex items-center  text-white font-bold text-[18px] md:text-[20px]`}>
                        <span className="mr-4"><IcoCrearLink/></span> { activeMenu ? " Crear link": ""}
                    </li>
                    <li className={` ${ activeMenu ? "justify-start" :"justify-center"} w-[100%] flex items-center  text-white font-bold text-[18px] md:text-[20px]`}>
                        <span className="mr-4"><IconProveedores/></span> { activeMenu ? " Proveedores": ""}
                    </li>
                    <li onClick={Salir} className={` ${ activeMenu ? "justify-start" :"justify-center"} w-[100%] flex items-center  text-white font-bold text-[18px] md:text-[20px]`}>
                        <span className="mr-4"><IconSalir/></span> { activeMenu ? " Salir": ""}
                    </li>
                </ul>
            </div>
        </section>
    
    </>
}

export default NaigationApp