import { IconArrowReturnWebsite } from "../icons/state.payment";

const LinkStatePayment = ():React.JSX.Element => {

    return<>
        <div className="cursor-pointer min-w-[290px] h-[60px] max-w-[650px] flex justify-center items-center text-[21px] font-normal text-[#6e6e6e]">
               <IconArrowReturnWebsite/> <p className="ml-2 mr-2">Volver al sitio web</p>
        </div>
    </>
}

export default LinkStatePayment;