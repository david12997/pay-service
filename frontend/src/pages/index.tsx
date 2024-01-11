import Navbar from "../components/common/nav"

const IndexPage = ():JSX.Element => {

    return<>

        <Navbar />
        <section className="services">
            <div className="flex flex-wrap min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row m-2 md:m-4">
                    <img src="https://onlinecheckwriter.com/wp-content/uploads/2022/08/Pay-or-Get-Paid-in-a-Way-That-Works-for-You-OCW.png" className="max-w-[300px] rounded-lg shadow-2xl " />
                    <div>
                    <h1 className="text-5xl font-bold">Links de pago</h1>
                    <p className="py-6 max-w-[300px]">
                        Crea links de pago personalizables para tus productos o servicios, 
                        compártelos con tus clientes y recibe pagos de forma rápida y segura.
                    </p>
                    <button className="btn btn-primary text-[18px]">Crear</button>
                    </div>
                </div>
                <div className="hero-content flex-col lg:flex-row m-2 md:m-4">
                    <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-[300px] rounded-lg shadow-2xl " />
                    <div>
                    <h1 className="text-5xl font-bold">Landing de Ventas</h1>
                    <p className="py-6 max-w-[300px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>

    
    </>
}

export default IndexPage