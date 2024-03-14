
export type CircleStepProps = {
    step: number,
    bakground: string,
    color: string,

}

const CircleStep =(props:CircleStepProps):React.JSX.Element => {

    const style ={
        background: props.bakground,
        color: props.color,
    }

    return<>
        <div style={style} className="circle rounded-[50%] w-[50px] h-[50px] flex items-center justify-center">
            <p className="text-[18px] font-bold text-center">{props.step}</p>
        </div>
    </>
}

export default CircleStep;