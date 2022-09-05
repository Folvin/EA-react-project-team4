import CardGrid from "./CardGrid";
import EaNavButton from "./EaNavButton";

interface NavUser {
    pos: string,
    handleToggle: (event: React.MouseEvent<HTMLImageElement>) => any;
}

function NavUserNotLoggedIn({ pos, handleToggle }: NavUser) {
    return (
        <div className={`h-400 transition-all w-full flex flex-col justify-end fixed ${pos} z-40 items-center bg-eaBlack-100`} >
            <div className="h-10 w-full flex justify-end gap-x-8 items-center">
                <div onClick={handleToggle} className="w-fit cursor-pointer">
                    <img className="w-7 h-7 mr-9 mt-9" src="assets/global/CrossNavIcon.png" alt="" />
                </div>
            </div>
            <div className="flex h-full w-full md:w-auto justify-start px-[12%] md:justify-center items-center">
                <CardGrid columns="grid-cols-1 md:grid-cols-2">
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/UserLoginNavIcon.png" url="/login" text="Accedi" />
                    <EaNavButton handleToggle={handleToggle} icon="assets/global/CreateAccountNavIcon.png" url="/register" text="Crea Account" />
                </CardGrid>
            </div>
        </div>
    );
}

export default NavUserNotLoggedIn;