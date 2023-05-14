const fakeAuth={
    signIn(cb:()=> void){
        setTimeout(cb,100);
    },
    SignOut(cb:()=> void){
        setTimeout(cb,100);
    }
}
export default fakeAuth;