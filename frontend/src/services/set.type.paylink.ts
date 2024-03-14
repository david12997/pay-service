import { setTypePaylink } from "../store/paylink";

const SetTypePaylink = (type: "product" | "service",dispatch:any) => {
   
    const acceptedTypes = ['product','service'];

    if(acceptedTypes.includes(type)){
        dispatch(setTypePaylink({
            type: type
        }));
    }

}

export default SetTypePaylink;