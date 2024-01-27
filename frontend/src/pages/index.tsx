
import { useNavigate } from "react-router-dom";
import Navbar from "../components/common/nav"
import { useEffect } from "react";
import { useAppSelector } from "../store";


const IndexPage = ():React.JSX.Element => {

    const router = useNavigate();
    const selectorUser = useAppSelector(state => state.user);

    useEffect(() => {
        if(selectorUser.token  !== null || selectorUser.token !== undefined) router('/home');

    }, []);

    return<>
        
        <Navbar />
        <section className="w-screen h-screen bg-[#E9E9E9] flex justify-center items-center pt-[50px]">
            <div className="card-main-index w-[90%]  h-[89%] bg-white rounded-[16px] overflow-y-scroll p-4">
                <div className="main-container w-[100%] flex flex-wrap items-center ">

                    <div className="container-1-texts w-[94%] m-[3%] md:w-[45%]">
                        <div className="title w-[100%] ">
                            <h1 className="text-[#4900FF] text-[19px]">Links de pago</h1>
                        </div>
                        <div className="phrase w-[100%] mt-[3vh]">
                            <h2 className="text-[30px] md:text-[45px] font-extrabold">
                                Venda <span className="text-[#0087A8]">productos</span> y <span className="text-[#0087A8]">servicios</span> rápido en cualquier lugar 
                            </h2>
                        </div>
                        <div className="container-2-animation  w-[100%] block md:hidden mt-[3vh]">
                            <img className="w-[100%] h-[100%]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/573tu6sz7gcgco8k" alt="animation" />
                        </div>

                        <div className="text w-[100%] mt-[3vh] md:w-[90%]">
                            <p className="text-[17px] font-normal text-[#6e6e6e]">
                            Links para vender por Internet sin 
                            necesidad de tener una página web. Crea una página 
                            de pago completamente funcional en unos pocos clics 
                            sin tener que programar nada, y comparte el enlace 
                            con tus clientes
                            </p>
                        </div>
                        <div className="buttons w-[100%] mt-[5%]">
                            <button onClick={()=>router('/registrarse')} className="w-[100%] md:w-[70%] h-[50px] md:h-[60px] bg-[#4900FF] rounded-[9px] text-white p-2">
                                <p className="text-[18px] font-semibold">
                                    Empieza gratis
                                </p>
                            </button>
                        </div>
                    </div>

                    <div className="container-2-animation  w-[90%] md:w-[45%] hidden md:block mt-[3vh]">
                        <img className="w-[100%]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/573tu6sz7gcgco8k" alt="animation" />

                    </div>

                </div>
            </div>
        </section>

    
    </>
}

export default IndexPage