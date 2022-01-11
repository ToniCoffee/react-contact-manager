import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';

const Search = ({onChange}) => {
  const onChangeDefault = (e) => {
    if(onChange instanceof Function) onChange(e);
  };

  return (
    <div className="search-container" >
      <input className="search-input" type="text" placeholder="Search contact" onChange={onChangeDefault}/>
      <FontAwesomeIcon className="search-icon" icon="search" color="black" size="lg" />
    </div>
  );
}

export default Search;