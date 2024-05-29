import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

export function useRequireAuth(redirectUrl = "/login") {
  const navigate = useNavigate();
  const { getToken, getExpiresIn } = useAuth();

  useEffect(() => {
    const expiresIn = getExpiresIn();
    const isTokenExpired = expiresIn
      ? new Date().getTime() > Number(expiresIn)
      : true;
    const token = getToken();

    console.log("isTokenExpired", isTokenExpired);
    console.log("token", token);

    if (!token || isTokenExpired) {
      navigate(redirectUrl);
      console.log("Redirecting to login not authenticated");
    }
  }, [getToken, navigate, redirectUrl, getExpiresIn]);
}
