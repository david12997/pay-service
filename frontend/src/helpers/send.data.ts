export const SendData = async(urls:string[],method:string,body:string,token?:string,) =>{

    try{


        const promises:any[] = [];

        urls.forEach((url:string, index:number)=>{
            
            promises[index] = fetch(url,{
                method:method,
                headers:token !== undefined ? {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                    
                }:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body:body
            
            })           
        
        });

        const response = await Promise.all(promises);
        return await Promise.all(response.map(res=>res.json()))
    
        
    
    } catch (error) {  
        
        throw error;
    }
    
}