import { useState } from "react"
import fakeAuth from "./fakeAuth";

export interface IUseAuthProvider{
    signIn: (cb: () => void) => void;
    signOut: (cb: () => void) => void;
    user: null | string;
}

const useAuthProvider=():IUseAuthProvider =>{
    const[user, setUser]=useState<null | string>(null)

    const signIn=(cb:()=> void) => {
        //fakeAuth.signIn( () => {
            //console.log(localStorage.getItem('user'))
        //})
        setUser(localStorage.getItem('user'))
        //setUser(user);
    };

    const signOut=(cb:() => void) => {
        fakeAuth.SignOut(() => {
            setUser(null)
        });
    };

    return{
        user,
        signIn,
        signOut,
    };

};
export default useAuthProvider;