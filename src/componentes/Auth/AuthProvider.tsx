import { createContext} from 'react'
import useAuthProvider, { IUseAuthProvider } from "./useAuthProvider";


export const AuthContext = createContext<IUseAuthProvider | null>(null);

const AuthProvider = ({ children })  =>{
    const Auth=useAuthProvider();

    return<AuthContext.Provider value={Auth}>{children}</AuthContext.Provider>
};
export default AuthProvider;