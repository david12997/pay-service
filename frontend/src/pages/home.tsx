import React from 'react';
import NaigationApp from '../components/common/navigation.card';
import CardAccessToken from '../components/cards/card.access.token';
import { IcoCrearLink, IconInventario } from '../components/icons/navigation.app';
import ButtonIcon from '../components/buttons/button.icon';
import useAuthToken from '../hooks/authorization';

const HomePage = ():React.JSX.Element => {
    
    const authentication = useAuthToken();
 
    return<>
        
        {
            authentication.authToken !== null && authentication.authToken !== undefined
            ?
            <>
                <section className='w-screen h-screen'>
                    <NaigationApp/>
                    <section className='fixed container-content border border-black w-[80%] h-[100%] ml-[20%] md:ml-[15%]'>

                        <div className='structure-1-homepage flex flex-wrap md:m-4'>
                            <div className='md:min-w-[330px]'>
                                <CardAccessToken/>
                            </div>
                            <div className="w-[100%] md:w-[40%] container-buttons min-w-[270px] flex flex-col justify-center items-center">
                                <ButtonIcon 
                                    text='Crear Link' 
                                    icon={<IcoCrearLink/>}
                                    width='260px'
                                />
                                <ButtonIcon 
                                    text='Inventario' 
                                    icon={<IconInventario/>}
                                    background='#0087A8'
                                    width='260px'
                                />
                            </div>
                        
                        </div>
                    


                    </section>
                    

                </section>
            </>
            :
            <></>
        }

       
    
    </>
};

export default HomePage;