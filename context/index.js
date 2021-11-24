import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

//intial context state
const initialState = {
  user: null,
};

//assign context
const Context = createContext();

//reducer function
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

//assign context provider for the whole app
const Provider = ({ children }) => {
  const router = useRouter();

  const [state, dispatch] = useReducer(rootReducer, initialState);
  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.parse(window.localStorage.getItem("user")),
    });
  }, []);

  //handling expiired tokens with axios interceptors
  axios.interceptors.response.use(
    function (response) {
      //any status code within the range of 2xx to trgigger this function
      return response;
    },
    function (error) {
      //any status code outside 2xx range specially 401{unauthorixed request} to trigger this and logout user
      let res = error.response;
      if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
        //trigger actual function to logout user and remove data from local storage
        return new Promise((resolve, reject) => {
          axios
            .get("/api/logout")
            .then((data) => {
              dispatch({ type: "LOGOUT" });
              window.localStorage.removeItem("user");
              router.push("/login");
              console.log("Axios interceptor hits");
            })
            .catch((err) => {
              console.log("AXIOS INTERCEPTOR ERR", err);
              reject(error);
            });
        });
      }
      return Promise.reject(error);
    }
  );

  //Getting csrf token from server api
  useEffect(() => {
    const getCsrfToken = async () => {
      const { data } = await axios.get("/api/csrf-token");
      axios.defaults.headers["X-CSRF-Token"] = data.getCsrfToken;
    };

    getCsrfToken();
  }, []);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
