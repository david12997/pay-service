
export type ButtonIconProps = {
    text: string;
    icon: React.JSX.Element;
    color?: string;
    background?: string;
    width?: string;
    height?: string;
}

const ButtonIcon = (props:ButtonIconProps):React.JSX.Element => {

    const styles ={
        background: props.background || '#4301E9',
        color: props.color || 'white',
        width: props.width || '260px',
        height: props.height || '50px',

    }

    return<>
        <button style={styles} className=' rounded-[6px] flex items-center justify-center m-2'>
            <span className='text-[18px] font-bold mr-2'>{props.text}</span> {props.icon}
        </button>
    </>
}

export default ButtonIcon;