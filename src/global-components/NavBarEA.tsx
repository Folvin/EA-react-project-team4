import { Link } from "react-router-dom";

function NavBarEA() {
    return (
        <div>
            <div className="h-10 w-full flex justify-end fixed top-0 z-50 gap-x-8 items-center bg-eaBlack-100">
                <img className="w-6 h-6 cursor-pointer hover:brightness-200" src="assets/global/UserNavIcon.png" alt="" />
                <img className="w-5 h-5 cursor-pointer hover:brightness-200" src="assets/global/QuestionMarkNavIcon.png" alt="" />
                <Link to="/"><img className="w-9 h-5 mr-8 cursor-pointer hover:brightness-125" src="assets/global/EANavIcon.png" alt="" /></Link>
            </div>
            <div>
                {/* Componente Area Utente */}
                <div className="h-400 w-full flex-col justify-end fixed top-10 z-40 items-center bg-eaBlack-100" >
                    <div className="h-10 w-full flex justify-end gap-x-8 items-center pr-9 pt-9">
                        <img className="w-3.5 h-3.5 cursor-pointer" src="assets/global/CrossNavIcon.png" alt="" />
                    </div>
                    <div >
                        <div>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
                {/* Componente Area Aiuto */}
            </div>
        </div>

    );
}

export default NavBarEA;