export const GetData = async(urls:string[],token:string) =>{

    try{


        const promises:any[] = [];

        urls.forEach((url:string, index:number)=>{
            
            promises[index] = fetch(url,{
                method:'GET',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`
                    
                },
            
            })           
        
        });

        const response = await Promise.all(promises);
        return await Promise.all(response.map(res=>res.json()))
    
        
    
    } catch (error) {  
        
        throw error;
    }
    
}