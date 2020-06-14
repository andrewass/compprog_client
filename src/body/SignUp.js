import React from "react";
import styled from "styled-components";

const SignUpForm = styled.div`
   width: 300px;
`;

class SignUp extends React.Component{

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <SignUpForm>
                <h1>Sign Up</h1>
                <form>
                    <input type="email" className="input-box" placeholder="Your email address"/>
                    <input type="password" className="input-box" placeholder="Your password"/>
                </form>
            </SignUpForm>
        );
    }

}

export default SignUp;