import { useState } from "react";
import { useMyUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import { getUser, removeToken, setTokenInLocalStorage } from "../services/localStorageService";
import { login, signup } from "../services/usersApiService";
import { useCallback } from "react";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";

const useUsers=()=> {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null);
    const setSnack = useSnack();



    const {  setToken, setUser }=useMyUser();
    const navigate = useNavigate();

    const handleLogin = useCallback(
        async (userLogin) => {
          setIsLoading(true);
          try {
            const token = await login(userLogin);
            setTokenInLocalStorage(token);
            setToken(token);
            setUser(getUser());
            navigate(ROUTES.CARDS);
          } catch (error) {
            setError(error.message);
          }
          setIsLoading(false);
        },
        [setToken, setUser, navigate]
      );

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
      }, [setUser]);

      // const handleSignup = useCallback(
      //   async (userFromClient) => {
      //     setIsLoading(true);
      //     try {
      //       const allUsers = await getAllUsersData(); 
      //       const emailExists = allUsers.some(user => user.email === userFromClient.email);
            
      //       if (!emailExists) { 
      //         const normalizedUser = normalizeUser(userFromClient);
      //         await signup(normalizedUser);
      //         await handleLogin({
      //           email: userFromClient.email,
      //           password: userFromClient.password,
      //         });
      //         setSnack("success", "Signup successful");
      //       } else {
      //         setSnack("failed", "Mail already exists");
      //       }
      //     } catch (error) {
      //       setError(error.message);
      //     }
      //     setIsLoading(false);
      //   },
      //   [handleLogin, setSnack, setIsLoading, setError]
      // );
      
      const handleSignup = useCallback(
        async (userFromClient) => {
          setIsLoading(true);
          try {
            const normalizedUser = normalizeUser(userFromClient);
            await signup(normalizedUser);
            await handleLogin({
              email: userFromClient.email,
              password: userFromClient.password,
            });
          } catch (error) {
            setError(error.message);
          }
          setIsLoading(false);
        },
        [handleLogin]
      );
      const handleContact =useCallback(() => {
        setSnack("success", "Message sent successfully");
        
      }, [setSnack]); 
return{isLoading, error, handleLogin, handleLogout, handleSignup,handleContact }
}
export default useUsers

