import TextWrap from "../TextWrap";
import { Link } from 'react-router-dom';
import {Links as LinksInterface, LocalFooterType} from '../../config/Interfaces';

function LocalFooterLinks({ arr, className, config }: { arr: Array<LinksInterface>, className: string, config: LocalFooterType }) {
  return (
    <TextWrap>
      {arr.map((link, index) => {
        return <Link to={link.path} key={index} className={`${config.hover} ${config.linkColor} ${className}`}>{link.name}</Link>
      })}
    </TextWrap>
  )
}

export default LocalFooterLinks
