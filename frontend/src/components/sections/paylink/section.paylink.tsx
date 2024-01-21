import { useState } from "react";
import CardFormPaylink from "../../cards/card.form.paylink";
import CardDataPaylink from "../../cards/carddata.paylink";

const SectionPaylink = ():React.JSX.Element => {

    const [screenVisible, setScreenVisible] = useState<"data" | "form">('data');

    return<>
    
    <section className="w-[100%] flex flex-wrap justify-around items-center mt-4">

        {
            screenVisible === 'data' ?
            <>
                <span className="w-[100%] md:w-[63%] flex justify-center items-center">
                    <CardDataPaylink setScreenVisible={setScreenVisible} />
                </span>
            </>
            :
            <>
                <span className="w-[100%] md:w-[63%] flex justify-center items-center">
                    <CardFormPaylink setScreenVisible={setScreenVisible} />     
                </span>
            </>
        }

        </section>
    </>
}

export default SectionPaylink;