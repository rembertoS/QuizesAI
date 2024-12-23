import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "../../firebase/clientApp";

const uiConfig ={
    signInSucessUrl: "/",

    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
};

function SignInScreen(){
    return(
        <div
        style={{
            maxWidth: "360px",
            display: "flex",
            flexDirection:"column",
            alignItems: "center",
            justifyContent: "center",
        }} >

            <h1>QuizAI Login</h1>
            <p>Please sign in</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>


        </div>
    );
}
export default SignInScreen;