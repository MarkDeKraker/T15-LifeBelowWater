import { useEffect } from 'react';

import { useAuth } from '../../context/AuthContext';

function Logout() {
  const { Logout } = useAuth();
  useEffect(() => {
    Logout();
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  }, [Logout]);
  return <>U bent Uitgelogd </>;
}

export default Logout;
