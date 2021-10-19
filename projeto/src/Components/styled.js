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
padding: 15px;
width: 250px;
height: 300px;
border-radius: 5px;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.20);

`
export const PokeButton = styled.div ` 
display: flex;

button {
    position: relative;
    top: 80px;
    width: 120px;
    height: 35px;
    margin: 10px;
    border-radius: 10px;
    right: 5px;
    font-size: 16px;
    :hover{
        background-color: yellow;
        cursor: pointer;       
    }
}
`

export const HeaderHome = styled.header ` 
display: flex;
justify-content: space-between;
align-items: center;
height: 60px;
background-image: linear-gradient(to right, yellow, blue);


h1{
    position: relative;
    left: 40px;
}

img {
    width: 35px;
    position: absolute;
}
button {
    height: 30px;
    margin: 5px;
    border-radius: 7px;
    font-size: 16px;
    
    :hover{
        background-color: yellow;
        cursor: pointer;   
}
}

`
export const StyledDetails = styled.div`
display: flex;
justify-content: space-between;
border: 2px solid #CCC;
height: 100vh;
align-items: center;

img{
    width: 200px;
    height: 200px;
    background-color: yellow;
    display: block;
    margin: 10px;
}

h2 {
    height: 500px;
    border: 2px solid #CCC;
    width: 200px;
    text-align: center;
    margin: 10px;
}
`;