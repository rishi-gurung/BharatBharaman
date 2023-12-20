import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function SignIN() {
    return (
        <GoogleOAuthProvider clientId="839767686746-k7po92t4e09n3hcmlabdkjldtlsjo3s9.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
    );
}

export default SignIN;