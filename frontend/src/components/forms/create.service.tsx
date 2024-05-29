import Input1 from "../inputs/input.1";

const CreateServiceForm = ():React.JSX.Element=>{

    const myformData = new FormData();

    return<>
        
        <form className="w-[96%] ml-[2%]  flex flex-wrap justify-start mt-4 mb-4" onSubmit={(e)=>e.preventDefault()}>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="text" placeholder="Ej: Camiseta XL" label="Nombre del Servicio" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="number" placeholder="Ej: 500000" label="Precio" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="number" placeholder="Ej: 19" label="IVA(%)" width="60%" />
            </div>
           
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="file" placeholder="Añadir foto" label="Seleccionar archivo" width="100%" />
            </div>

            

            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="number" placeholder="Ej: 26000" label="Precio del envío" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 formData={myformData} type="number" placeholder="Ej: 5" label="Stok disponible" width="100%" />
            </div>

            
            
                
        </form>
    </>
}

export default CreateServiceForm;