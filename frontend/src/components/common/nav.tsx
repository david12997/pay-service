import { IconHamburguerPaylink } from "../icons/paylink.page"

const Navbar = ():JSX.Element => {

    return<>
        
        <div className=" w-[92vw] ml-[4vw] flex justify-between  h-[70px] z-[99] fixed">
          <div className="container-logo flex items-center min-w-[190px]">
            <img className="min-w-[50px] w-[50px]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" alt="logo" />
            <p className="text-[18px] md:text-[20px] font-bold text-[#2E28B7] ml-2">Links de pago</p>
          </div>

          <div className="container-links text-[#6e6e6e] justify-center hidden min-w-[260px] max-w-[300px] items-center ml-20 mr-2 md:flex">
            <p className="text-[18px] font-semibold ml-2 mr-2 text-[#4301E9]">Inicio</p>
            <p className="text-[18px] font-semibold ml-2 mr-2">Planes</p>
            <p className="text-[18px] font-semibold ml-2 mr-2">Contacto</p>
            
          </div>
          <div className="hidden md:flex container-buttons w-[100%] md:w-[500px] justify-end p-2 text-[18px] ">
                <button className="ml-2 mr-2 w-[150px] bg-[#0087A8] rounded-[9px] text-white">
                    <p>
                        Ingresar
                    </p>
                </button>

                <button className="ml-2 mr-2 w-[150px] bg-[#2E28B7] rounded-[9px] text-white">
                    <p>
                        Empieza gratis
                    </p>
                </button>
          </div>

          <div className="hamburguer-menu flex md:hidden items-center">
            <IconHamburguerPaylink color="#2E28b7"/>

          </div>

        </div>
    </>
}

export default Navbar
