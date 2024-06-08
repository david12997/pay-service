import React from 'react';
import NaigationApp from '../components/common/navigation.card';
import CardAccessToken from '../components/cards/card.access.token';
import { IcoCrearLink, IconInventario } from '../components/icons/navigation.app';
import ButtonIcon from '../components/buttons/button.icon';
import useAuthToken from '../hooks/authorization';
import { IconWarning } from '../components/icons/coommon';

const HomePage = ():React.JSX.Element => {
    
    const authentication = useAuthToken();

    return<>
        
        {
            authentication.authToken !== null && authentication.authToken !== undefined
            ?
            <>
                <section className='w-screen h-screen'>
                    <NaigationApp/>
                    <section className='fixed overflow-y-scroll overflow-x-hidden container-content border border-black w-[80%] h-[100%] ml-[20%] md:ml-[15%]'>

                        <div className='structure-1-homepage flex flex-wrap md:m-4 w-[100%]'>

                            <div className='md:min-w-[330px]'>
                                <CardAccessToken/>
                            </div>

                            <div className="w-[100%] md:w-[40%] container-buttons min-w-[270px] flex flex-col justify-center items-center">
                                <ButtonIcon 
                                    text='Create Link' 
                                    icon={<IcoCrearLink/>}
                                    width='260px'
                                />
                                <ButtonIcon 
                                    text='Inventory' 
                                    icon={<IconInventario/>}
                                    background='#0087A8'
                                    width='260px'
                                />
                            </div>
                        
                        </div>

                        <div className="structure-2-homepage w-[100%] md:m-4">
                            <>
                                <hr className='w-[94%] ml-[3%] h-[2px] bg-[#adadad] mt-8 mb-8' />
                                <h1 className='m-2 text-[18px] md:text-[20px] text-black font-bold'>My Paylinks</h1>
                                <section className='section-empty-links-index flex justify-center items-center m-2  bg-white w-[95%]  rounded-[9px] min-h-[400px] '>
                                    <div className="container-empty border">
                                        <div className="icon w-[100%] flex justify-center">
                                            <IconWarning/>
                                        </div>
                                        <p className='text-[18px] font-bold text-[#6e6e6e] mt-2'>You don't have paylinks created yet</p>
                                        
                                    </div>
                                </section>
                            
                            
                            </>
                        
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