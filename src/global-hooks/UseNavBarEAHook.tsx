import { useState } from "react";

function UseNavBarEAHook() {

    const [userMenu, setUserMenu] = useState('top-[-400px]');

    const [helpMenu, setHelpMenu] = useState('top-[-400px]');

    function handleToggle(event: React.MouseEvent<HTMLImageElement>) {

        let target = event.target as HTMLImageElement;

        if (target.id === 'user') {

            if (helpMenu === 'top-10') {
                setHelpMenu('top-[-400px]');
            } 
            
            if (userMenu === 'top-[-400px]') {
                setUserMenu('top-10')
            } else {
                setUserMenu('top-[-400px]')
            }
        } 
        
        else if (target.id === 'help') {

            if (userMenu === 'top-10') {
                setUserMenu('top-[-400px]')
            } 
            
            if (helpMenu === 'top-[-400px]') {
                setHelpMenu('top-10')
            } else {
                setHelpMenu('top-[-400px]')
            }
        } 
        
        else {
            setHelpMenu('top-[-400px]');
            setUserMenu('top-[-400px]');
        }
    }

    return ({
        userMenu,
        helpMenu,
        handleToggle,
        setUserMenu, 
        setHelpMenu
    });
}

export default UseNavBarEAHook;