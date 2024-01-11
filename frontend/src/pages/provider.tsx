import MercadopagoProvider from "../components/sections/provider/mp.provider"

const ProviderPage = ():JSX.Element => {

    return<>
        <section className="w-[94%] ml-[3%] md:w-[70%] md:ml-[15%] p-2 pt-[60px]">
            <MercadopagoProvider methods={{
                creditCard:"all",
                debitCard:"all",
                ticket:"all",
                bankTransfer:"all",
                mercadoPago:"all",
                maxInstallments:12
            }}/>
        </section>
    </>
}

export default ProviderPage;