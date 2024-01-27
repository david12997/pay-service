
const CardAccessToken = ():React.JSX.Element => {

    return<>
        <section className='card-access_token min-w-[250px] max-w-[390px] h-[140px] rounded-[9px] bg-white m-2'>
            <p className='w-[100%] p-2 tetx-[18px] text-[#6e6e6e] font-semibold'>Access Token</p>
            <div className='100% p-2 flex items-center justify-around'>
                <img src='https://pay-service-cms.aipus.co/aipus-pay-service/assets/mmu3bdqvym80sssc' className='w-[50px] h-[30px] rounded-[9px]'/>
                <input type='text' className='w-[80%] h-[50px] ml-2  rounded-[4px] bg-[#e6e6e6] border border-[#aaaaaa]'/>
            </div>
        </section>
    </>
};


export default CardAccessToken;