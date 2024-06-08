import { useEffect, useRef } from "react";
import { IconArrowRight } from "../../icons/coommon";
import { useNavigate } from "react-router-dom";

export type MenuMobileProps = {
    setMenuMobile: React.Dispatch<React.SetStateAction<boolean>>;
    menuMobile: boolean;
}

const MenuMobileIndex = (props:MenuMobileProps):React.JSX.Element => {

    const sectionRef = useRef<HTMLElement>(null);
    const router = useNavigate();

    const closeMenu = () => {
        sectionRef.current?.classList.remove('menu-index-enter');
        sectionRef.current?.classList.add('menu-index-out');
        setTimeout(() => {
            sectionRef.current !== null 
            &&
            (sectionRef.current.style.display = 'none');
        }, 800);

        props.setMenuMobile(false);
    }

    const openMenu = () => {
        sectionRef.current?.classList.remove('menu-index-out');
        sectionRef.current?.classList.add('menu-index-enter');
        sectionRef.current !== null 
        &&
        (sectionRef.current.style.display = 'flex');

    
    }

    useEffect(() => {

        props.menuMobile ? openMenu() : closeMenu();

    }, [props.menuMobile]);

    return<>
        <section onClick={closeMenu}  ref={sectionRef} className="fixed  w-[100%] h-screen z-[999] bg-[#00000090] hidden md:hidden justify-end">
            <div onClick={(e)=>e.stopPropagation()} className="container-menu bg-white w-[76%] h-[100%]">
                <div onClick={closeMenu} className="container-inicio-cerrar w-[100%] h-[50px] relative flex items-center justify-center">
                    <p className="text-[18px] font-bold text-[#4301e9]">Menu</p> 
                    <span className="absolute right-[10px]">
                        <IconArrowRight />
                    </span>
                </div>

            <div className="container-body">
                <button className="ml-2 mr-2 mt-8 w-[94%] h-[50px] bg-[#0087A8] rounded-[9px] text-white">
                  <p>
                      Home
                  </p>
                </button>
                <button className="ml-2 mr-2 mt-8 w-[94%] h-[50px] bg-[#2e28b7] rounded-[9px] text-white">
                  <p>
                      Plans
                  </p>
                </button>
                <button className="ml-2 mr-2 mt-8 w-[94%] h-[50px] bg-[#2e28b7] rounded-[9px] text-white">
                  <p>
                      Contact
                  </p>
                </button>
                <button onClick={()=>router('/ingresar')} className="ml-2 mr-2 mt-8 w-[94%] h-[50px] bg-[#2e28b7] rounded-[9px] text-white">
                  <p>
                      Login
                  </p>
                </button>

              <button onClick={()=>router('/registrarse')} className="ml-2 mr-2 mt-8 w-[94%] h-[50px] bg-[#2E28B7] rounded-[9px] text-white">
                  <p>
                      Start Free
                  </p>
              </button>
                </div>

            </div>
        </section>
    </>
}

export default MenuMobileIndex;