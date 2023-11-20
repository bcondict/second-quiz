import { useContext, useState, useEffect } from "react";


export const useAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, []);
  return {user};
}

export const useLogout = () => {
  localStorage.removeItem('user');
  window.location.href = '/';
}
