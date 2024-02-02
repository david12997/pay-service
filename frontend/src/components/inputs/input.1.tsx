
export interface Input1Props{
    label:string,
    width:string,
    type:string,
    placeholder:string,
    formData : FormData


}


const Input1 = (props:Input1Props):JSX.Element =>{

  
    const style = {
        width: props.width,
    }

    const handleUploadedFile = (e:React.ChangeEvent<HTMLInputElement>) =>{

        if (!e.target.files || e.target.files.length === 0) return;

        const file = e.target.files[0];
        if (file.size > 2 * 1024 * 1024) {
            alert('El archivo es demasiado grande.');
            return;
          }

        props.formData.append("file", file);

    
    }

    if (props.type === "file") {
        return<>
            <div style={style} className="field flex flex-col w-[50%] ">
                <label className="text-[#6e6e6e]">{props.placeholder}</label>
                <label htmlFor="input-photo" className="text-[#6e6e6e] cursor-pointer  bg-[#e6e6e6] h-[54px] rounded-[6px] w-[100%] text-center flex items-center justify-center">{props.label}</label>
                <input onChange={handleUploadedFile} accept=".jpg,.png,.jpeg,.svg,.webp" id="input-photo" type={props.type} placeholder={props.placeholder} className="hidden"/>
            </div>
        </>
    }else{

        return<>
            <div style={style} className="field flex flex-col w-[50%]">
                <label className="text-[#6e6e6e]">{props.label}</label>
                <input type={props.type} placeholder={props.placeholder} className="rounded-[6px] h-[54px] bg-[#e6e6e6] text-[#6e6e6e] border border-[#e6e6e6]"   />
            </div>
        </>
    }

   
}

export default Input1;