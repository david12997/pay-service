import { useRef, useState } from "react";
import Input1 from "../inputs/input.1"
import { SendData } from "../../helpers/send.data";
import { useAppSelector } from "../../store";

const CreateProductForm = ():React.JSX.Element=>{

    const [statusDelivery, setStatusDelivery ] = useState<boolean>(true);
    const  stateUser = useAppSelector((state) => state.user);

    // form data to send to the server and create a new product
    const myformData = useRef(new FormData()).current;
    const CreateNewProduct = async (e:React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault();

        // fileds required
        const fields:string[] = [
            'name',
            'price',
            'iva',
            'description',
            'file',
            'delivery',
            'price_delivery',
            'stock'
        ];

        
        //verify if the form data is correct
        for (const [_, value] of myformData.entries()) {

            if (value instanceof File){
                if(value.size > 5000000){
                    alert('The file is too large, the maximum size is 5MB');
                    return;
                }
            }else{

                if(value === '' || value === null || value === undefined){
                    alert('All fields are required');
                    return;
                }
            }
           
            
        }


        // add user data to the form data
        myformData.append('owner', '1');
        myformData.append('status', 'published');
        myformData.append('email_user', stateUser.email as string); 

        // status delivery 
        if(statusDelivery) myformData.append('delivery', 'Si');
        else myformData.append('delivery', 'No');
        


        //send the data to the server
        try{
            const CreateProduct = await SendData([process.env.API_URL+'/inventory/product'],'POST',myformData,stateUser.token as string);
            console.log(CreateProduct);
        }catch(e){
            console.log(e);
            alert('Error creating the product');
        }
       

    }

   




    return<>
        <form className="w-[96%] ml-[2%] relative  flex flex-wrap justify-start mt-4 mb-4" onSubmit={(e)=>CreateNewProduct(e)}>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 required={true}  name="name" formData={myformData} type="text" placeholder="Example: Shirt XL" label="Name product" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 required={true} name="price" formData={myformData} type="number" placeholder="Example: 500000" label="Price" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 required={true} name="iva" formData={myformData} type="number" placeholder="Example: 19" label="IVA(%)" width="60%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 required={true} name="description" formData={myformData} type="text" placeholder="Example: Sell two t-shirts" label="Description" width="100%" />
            </div>
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 
                    required={true} 
                    name="file" 
                    formData={myformData} 
                    type="file" 
                    placeholder="Add photo" 
                    label={'Select file'} 
                    width="100%"
                   
                />
            </div>

            <div className="w-[90%] m-2  md:w-[30%] p-2 flex flex-col">
                <label className="text-[#6e6e6e]">Delivery</label>
                <select 
                    name="delivery" 
                    className="w-[100%] h-[54px] rounded-[6px] bg-[#e6e6e6] border border-[#e6e6e6]" 
                    onChange={()=>setStatusDelivery(!statusDelivery)}
                >
                    <option value={'Yes'} className="">Yes</option>
                    <option value={'No'} className="">No</option>

                </select>
            </div>


            {
                statusDelivery && <>
                
                    <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                        <Input1 required={true} name="price_delivery" formData={myformData} type="number" placeholder="Ej: 26000" label="Precio del envío" width="100%" />
                    </div>
                </>
            }

            
            <div className="w-[90%] m-2  md:w-[30%] p-2 ">
                <Input1 required={true} name="stock" formData={myformData} type="number" placeholder="Ej: 5" label="Stok available" width="100%" />
            </div>

            <button type="submit" className="absolute w-[88%] ml-[3%] h-[60px] bg-primary bottom-[-90px] rounded-[6px] text-white font-bold text-[18px]">
                Create Product
            </button>
            
                
        </form>
    </>
}

export default CreateProductForm;