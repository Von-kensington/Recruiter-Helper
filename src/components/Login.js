import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Nav>
                <a href="/">
                    <img style={{ height: "inherit" }} src="/images/Logo.png"></img>
                </a>
                <Login />
                <Join />
            </Nav>
        </Container>
    )
}


const Container = styled.div`
    padding: 10px;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 8px #00000040;
`
const Nav = styled.nav`
    max-width: 1128px;
    margin: auto;
    align-items: center;
    &>a{
        height: 50px;
    }
    display: flex;
`
export default Login