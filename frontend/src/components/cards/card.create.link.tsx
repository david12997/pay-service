import CircleStep from "../common/circle.step"
import { IconArrowLeft, IconCartCreateLink } from "../icons/coommon"

export type CardCreateLinkProps = {
    view: number,
    steps: number,
    step: number,
    title: string,
    button_text: string,
    children: React.ReactNode,
    addItmes: boolean
    clickButtoNext?: () => void,
    clickButtoBack?: () => void,
    clickButtoSave?: () => void,
    clickButtoAdd?: () => void,
    clickButtoRemove?: () => void,
    clickButtoEdit?: () => void,
    clickButtoCancel?: () => void,
    clickButtoCreate?: () => void,
}

const CardCreateLink = (props:CardCreateLinkProps):React.JSX.Element => {

    const stepsArr = Array.from(Array(props.steps).keys());

    console.log('step card create link',props.step)

    return<>
        <div className="relative card-content m-2 md:m-8 w-[94%] md:w-[90%] bg-white min-h-[500px]  rounded-[9px] pb-[90px]">
            <div className="title w-[94%] ml-[3%] h-[60px]  flex items-center cursor-pointer relative">
                <span onClick={props.clickButtoBack} className="icon-come-back mr-4">
                   {props.view !== 1 && <IconArrowLeft/>}
                </span> 
                <p className="text-[18px] md:text-[20px] font-bold text-black">{props.title}</p>
                <div className="icon-cart absolute left-[86%] md:left-[96%]">
                    <IconCartCreateLink width="30" height="28"/>
                </div>
            </div>

            {
                props.step !== 0 &&
                <div className="container-steps w-[94%] ml-[3%] h-[60px] flex items-center justify-center">
                    <div className="steps min-w-[260px] max-w-[500px] w-[100%] h-[100%] flex items-center justify-around cursor-pointer">
                        {
                        stepsArr.map((_:any, index:number) => {
                                if( props.step === index+1) return <CircleStep  step={index+1} key={index} bakground="#0087A8" color="#fff"/>
                                return <CircleStep  step={index+1} key={index} bakground="#e6e6e6" color="#6e6e6e"/>
                            })
                        }
                        
                    </div>
                </div>

            }
            

            <div className="container-content-step w-[94%] ml-[3%]">
                    {props.children}
            </div>

            {
                props.addItmes ?
                <>
                    <div className="container-button w-[100%] flex flex-wrap absolute bottom-[20px]  items-center justify-center">
                        <button className="mb-2 md:mb-0 md:mr-2 rounded-[6px] w-[250px] h-[60px] text-[20px] font-semibold text-white  bg-[#6e6e6e]">
                           Guardar
                        </button>
                        <button className="mt-2 md:mt-0 md:ml-2 rounded-[6px]  w-[250px] h-[60px] text-[20px] font-semibold text-white  bg-[#6e6e6e]">
                            Siguiente
                        </button>
                    </div>
            
                </>
                :
                <>
                    <div className="container-button w-[100%] flex  absolute bottom-[20px]  items-center justify-center">
                        <button onClick={props.clickButtoNext} className="rounded-[6px] w-[90%] min-w-[250px] max-w-[450px] h-[60px] text-[20px] font-semibold text-white  bg-[#602AE8]">
                            {props.button_text}
                        </button>
                    </div>
                </>
            }
            

            

        </div>
    </>
}

export default CardCreateLink;