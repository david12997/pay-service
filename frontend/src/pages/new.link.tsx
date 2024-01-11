const NewLinkPage = ():JSX.Element => {

    return<>
        <section className="pt-[60px]">
        <div className="block min-h-screen bg-base-200">
            <h1 className="pt-4 mb-4 w-[100%] text-[26px] font-extrabold flex justify-center">Configurar proveedor de pago</h1>
            <form className="p-[5px] md:p-[20px] w-[94%] ml-[3%] md:w-[50%] md:ml-[25%] bg-white rounded-[9px] shadow-md">
                <label className="text-[#6e6e6e] p-2">Nombre del proyecto</label>
                <input type="text" className="input input-bordered w-[100%]" placeholder="Nombre del link" />
                <br/>
                <br/>

                <label className="text-[#6e6e6e] p-2" >Elige un proveedor de pagos</label>
                <select className="select select-bordered w-[100%]">
                    <option disabled selected className="text-[#6e6e6e]">Elige una pasarela de pagos</option>
                    <option>Mercadopago</option>
                    <option>Epayco</option>
                    <option>Paypal</option>
                    <option>Nequi</option>
                    <option>PayU</option>
                </select>
                <br/>
                <br/>

                <label className="text-[#6e6e6e] p-2" >Elige un servicio</label>
                <select className="select select-bordered w-[100%]">
                    <option disabled selected className="text-[#6e6e6e]">Elige una solucion de pagos</option>
                    <option>Mercadopago</option>
                    <option>Epayco</option>
                    <option>Paypal</option>
                    <option>Nequi</option>
                    <option>PayU</option>
                </select>
            </form>
            
            
        </div>
        </section>
    
    </>
};

export default NewLinkPage;