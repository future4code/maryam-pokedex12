import styled from "styled-components"

// --- HOMEPage --- //

export const HomeContainer = styled.div ` 
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr 1fr 1fr ;
margin: 50px;
`

export const CardContainer = styled.div ` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 10px;
padding: 10px;
width: 250px;
height: 300px;
box-shadow: 2px -2px cadetblue;
`
export const PokeButton = styled.div ` 
display: flex;

button {
    position: relative;
    top: 80px;
    width: 120px;
    height: 35px;
    margin: 10px;
    border-radius: 5px;
    right: 5px;
    :hover{
        background-color: cadetblue;
        cursor: pointer;       
    }
}
`