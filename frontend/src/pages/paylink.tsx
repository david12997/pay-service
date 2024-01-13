import { IconHamburguerPaylink } from "../components/icons/paylink.page";
import SectionPaylink from "../components/sections/paylink/section.paylink";

const PayLinkPage = ():React.JSX.Element => {

    return<>
        <main className="relative w-screen h-screen overflow-x-hidden bg-[#dbdbdb]">
            <div className="w-screen h-[35vh] linear-gradient-bg-paylink absolute top-0"></div>

            <nav className="relative flex justify-between items-center w-screen md:w-[90%] ml-[5%] h-[60px] p-2 md:p-4 mb-6">
                <div className="logo h-[50px] w-[50px] flex items-center justify-center">
                    <img className="w-[40px]" src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/m8lpvfnt7esgo8go" alt="logo" />
                </div>
                <div className="w-[600px] h-[50px] md:flex text-white justify-end items-center cursor-pointer hidden">
                    <span className="ml-4 mr-4 text-[18px] font-semibold">Pagos seguros</span>
                    <span className="ml-4 mr-4 text-[18px] font-semibold">Métodos de pago</span>
                    <span className="ml-4 mr-4 text-[18px] font-semibold">Necewsito ayuda</span>
                </div>

                <div className="conatiner-hamburguer block md:hidden">
                    <span className="hamburguer">
                        <IconHamburguerPaylink />
                    </span>
                </div>
            </nav>
            <SectionPaylink />


        </main>
    </>
}

export default PayLinkPage;