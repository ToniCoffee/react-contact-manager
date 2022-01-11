import Link                 from '/src/components/router/link';
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome';
import './icon-link.css';

const IconLink = ( { href, className, icon, color, size = 'lg', pull = 'left', onClick } ) => (
  <Link className={className} href={href} onClick={onClick}>
    <FontAwesomeIcon className="icon" icon={icon} color={color} size={size} pull={pull} border />
  </Link>
);

export default IconLink;