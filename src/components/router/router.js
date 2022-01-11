import { useEffect, useState      } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import contactActions from '/src/actions/contact-actions';
import routes         from '/src/routes/routes';

const Router = ({ path, children }) => {
  const initialState  = useSelector((state) => state.initialState);
  const dispatch      = useDispatch();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    // define callback as separate function so it can be removed later with cleanup function
    const onLocationChange = () => {
      if(window.location.pathname === routes.contact.home) {
        dispatch(contactActions.contactSelected(initialState));
      } 
      setCurrentPath(window.location.pathname);
    }

    
    window.addEventListener('popstate', onLocationChange);
    
    // clean up event listener
    return () => {
        window.removeEventListener('popstate', onLocationChange);
    };
  }, [currentPath, dispatch, initialState]);

  return currentPath === path ? children : null
}

export default Router;