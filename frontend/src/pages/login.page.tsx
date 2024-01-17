import React from 'react';

const LoginPage = ():React.JSX.Element => {

    return<>
        <section className='w-[100%]  bg-[#E9E9E9]'>
            <div className="absolute container-return w-[80%] ml-[10%] top-[30px]">
                <p>Volver</p>
            </div>

            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img className="mx-auto h-20 w-auto" 
                    src="https://pay-service-cms.aipus.co/aipus-pay-service/assets/97ydi7u98rwo0k00" 
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight to-blue-500">Iniciar Sesion</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label htmlFor="email" className="block text-[16px] font-medium leading-6 text-balance">Correo electronico</label>
                    <div className="mt-2">
                    <input id="email" 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        required 
                        className="h-[45px] block w-full rounded-md border-0 bg-white/5 py-1.5 text-cyan-600 shadow-sm ring-1 ring-inset ring-[#4900FF] focus:ring-2 focus:ring-inset focus:ring-balck sm:text-[16px] sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-[16px] font-medium leading-6 text-black">Contraseña</label>
                    <div className="text-[16px]">
                        <a href="#" className="font-semibold text-[#4900FF] hover:text-[#7700ff]">¿Olvidaste tu contraseña?</a>
                    </div>
                    </div>
                    <div className="mt-2">
                    <input id="password" 
                        name="password" 
                        type="password" 
                        autoComplete="current-password" 
                        required 
                        className="h-[45px] block w-full rounded-md border-0 bg-white/5 py-1.5 text-[#6e6e6e] shadow-sm ring-1 ring-inset ring-[#4900FF] focus:ring-2 focus:ring-inset focus:ring-black sm:text-[16px] sm:leading-6"
                    />
                    </div>
                </div>

                <div>
                    <button type="submit" className="text-[18px] h-[45px] flex w-full items-center   justify-center rounded-md bg-[#4900FF] px-3 py-1.5  font-semibold leading-6 text-white shadow-sm hover:bg-[#7700ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7700ff]">
                            Ingresar
                    </button>
                </div>
                <div className="my-5">
                    <button className="w-full text-[18px] text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                        <img 
                            src="https://cdn.iconscout.com/icon/free/png-256/free-google-1772223-1507807.png" 
                            className="w-6 h-6" alt=""
                        /> 
                        <span>Ingresar con Google</span>
                    </button>
                </div>
                
                </form>

                <p className="mt-10 text-center text-[16px] text-gray-400">
                ¿No estas registrado?
                <a href="#" className="font-semibold leading-6 text-[#4900FF] hover:text-[#7700ff] ml-2">Empieza gratis</a>
                </p>
            </div>
            </div>
            
        </section>
    
    </>
}

export default LoginPage;