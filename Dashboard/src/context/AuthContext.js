import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import JwtService from '../services/JwtService';
import { axiosReq } from 'src/utils/axiosReq';
import { toast } from 'react-toastify';

const AuthGardContext = createContext({});

const ProvideAuthGard = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const signIn = useCallback(async ({ email, password }) => {
    try {
      const { data } = await axiosReq.post('/auth/sign-in', {
        email,
        password,
      });
      if(data.status !== 200) {
        throw new Error(data?.response?.data?.data?.message)
      }
      JwtService.setToken(data.token);
      setUser({
        id: data?.data?.userId,
        name: data?.data?.name,
        role: data?.data?.role,
        email: data?.data?.email,
        clients: data?.data?.clients
      });
      if (data.data.status === 200) {
        toast.success(`user login successfully`);
      }
      navigate(PATH_AFTER_LOGIN)
      return data

    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.data?.message);
    }
  }, []);

  const signOut = useCallback(async() => {
    JwtService.destroyToken();
    await axiosReq.get('/auth/log-out')
    setUser(null);
    navigate('/auth')

  }, []);

  useEffect(() => {
  const tokenC = document.cookie
  if(!tokenC.length){
    navigate('/auth')
  }
  }, [user])

  const me = useCallback(async () => {
    try {
      const { data } = await axiosReq.get('/auth/user/me');
      setUser({ ...data?.user });
      if (data.data.status === 200) {
        toast.success(`user Already Logged in successfully`);
      }
    } catch (error) {
      toast.error(error);
      console.log(error, );
    }
  }, []);

useEffect(() => {
  console.log(user);

}, [user])
  const authGardValues = useMemo(
    () => ({
      user,
      setUser,
      signOut,
      signIn,
    }),
    [signIn, signOut, user],
  );

  useEffect(() => {
    (async () => {
      const token = JwtService.getToken();
      const tokenC = document.cookie
      if (token && tokenC.length) {
        await me();
        navigate('/dashboard');
      }
    })();
  }, []);

  return (
    <AuthGardContext.Provider value={authGardValues}>
      {children}
    </AuthGardContext.Provider>
  );
};

export { ProvideAuthGard, AuthGardContext };
