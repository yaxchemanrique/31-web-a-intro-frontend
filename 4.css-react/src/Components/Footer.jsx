import React from 'react'
import styled from 'styled-components'

function Footer({color}) {

    const StyledFooter = styled.div`
        display: flex;
        background-color: ${color};
        flex-direction: column;
        padding: 3rem;
    `

    const StyledContainer = styled.div`
        display: flex;
        justify-content: flex-end;
        gap: 1rem;
        align-items: center;
        font-weight: bold;
    `

    const StyledTitle = styled.h1`
        font-weight: bold;
        align-self: center;
    `

    const StyledTitleWhite = styled(StyledTitle)`
        color: white;
    `

    return (
        <div>
            <StyledFooter>
                <StyledTitle>Esto es un footer</StyledTitle>
                <StyledTitleWhite>Esto es un footer pero en blanco</StyledTitleWhite>
                <StyledContainer>
                    <a href="#">Home</a>
                    <a href="#">Log in</a>
                    <a href="#">About us</a>
                </StyledContainer>
            </StyledFooter>
        </div>
    )
}

export default Footer