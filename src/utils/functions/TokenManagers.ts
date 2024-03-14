export const setToken = (accessToken: string, refreshToken: string) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };
  
  export const removeToken = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };
  
  export const getToken = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
  
    return { accessToken, refreshToken };
  };
  