export const TOKEN_KEY = '@ams-token';
export const isAuthenticated = () => (true);//localStorage.getItem(TOKEN_KEY);
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) =>{
    localStorage.setItem(TOKEN_KEY,token)
};

export const logout = (token) =>{
    localStorage.removeItem(TOKEN_KEY);
};