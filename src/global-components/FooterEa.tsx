import FooterContainer from './FooterContainer';
import { LogoEa, LogoTrust, FooterListDown, FooterListUp } from './FooterData';
import FooterSelectBox from './FooterSelectBox';


function FooterEa() {
    return( 
        <FooterContainer>
            <LogoEa />
            <FooterListUp />
            <FooterSelectBox />
            <FooterListDown />
            <LogoTrust />
        </FooterContainer>
    )
}
export default FooterEa