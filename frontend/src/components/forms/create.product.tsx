import Input1 from "../inputs/input.1"

const CreateProductForm = ():React.JSX.Element=>{

    const myformData = new FormData();

    const CreateNewProduct = async (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

       // Log all the form data for verification
       for (const [key, value] of myformData.entries()) {
        if (value instanceof File) {
            console.log(`File key: ${key}, File name: ${value.name}`);
        } else {
            console.log(`Key: ${key}, Value: ${value}`);
        }
    }

    }

    return<>
        <form className="w-[96%] ml-[2%] relative  flex flex-wrap justify-start mt-4 mb-4" onSubmit={(e)=>CreateNewProduct(e)}>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1  name="name-product" formData={myformData} type="text" placeholder="Example: Shirt XL" label="Name product" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="price" formData={myformData} type="number" placeholder="Example: 500000" label="Price" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="iva" formData={myformData} type="number" placeholder="Example: 19" label="IVA(%)" width="60%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="description" formData={myformData} type="text" placeholder="Example: Sell two t-shirts" label="Description" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="photo" formData={myformData} type="file" placeholder="Add photo" label="Select file" width="100%" />
            </div>

            <div className="w-[90%] m-2  md:w-[30%] p-2 flex flex-col">
                <label className="text-[#6e6e6e]">Delivery</label>
                <select name="delivery" className="w-[100%] h-[54px] rounded-[6px] bg-[#e6e6e6] border border-[#e6e6e6]" onChange={()=>{
                   
                }}>
                    <option value={'yes'} className="">Yes</option>
                    <option value={'no'} className="">No</option>

                </select>
            </div>

            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="" formData={myformData} type="number" placeholder="Ej: 26000" label="Precio del envío" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 name="stock" formData={myformData} type="number" placeholder="Ej: 5" label="Stok available" width="100%" />
            </div>

            <button type="submit" className="absolute w-[88%] ml-[3%] h-[60px] bg-primary bottom-[-90px] rounded-[6px] text-white font-bold text-[18px]">
                Create Product
            </button>
            
                
        </form>
    </>
}

export default CreateProductForm;