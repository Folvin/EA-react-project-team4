import TextWrap from "../TextWrap";
import { Link } from 'react-router-dom';
import config from '../../config/LocalFooterHome';
import {Links as LinksInterface} from '../../config/Interfaces';

function LocalFooterLinks({ arr, className }: { arr: Array<LinksInterface>, className: string }) {
  return (
    <TextWrap>
      {arr.map((link, index) => {
        return <Link to={link.path} key={index} className={`${config.hover} ${config.linkColor} ${className}`}>{link.name}</Link>
      })}
    </TextWrap>
  )
}

export default LocalFooterLinks
