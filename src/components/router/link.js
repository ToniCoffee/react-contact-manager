const Link = ({className, href, onClick, children}) => {
  const onClickDefault = (e) => {
    // if ctrl or meta key are held on click, allow default behavior of opening link in new tab
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();

    if(href && href !=="" && href !== window.location.pathname) {
      window.history.pushState({}, "", href);

      // communicate to Routes that URL has changed
      const navEvent = new PopStateEvent('popstate');
      window.dispatchEvent(navEvent);
    }
  };

  return (
    <a 
      href      = {href} 
      className = {className} 
      onClick   = {(e) => {
        onClickDefault(e);
        if(onClick instanceof Function) onClick(e);
      }}
    >
      {children}
    </a>
  )
};

export default Link;