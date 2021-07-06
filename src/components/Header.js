import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from '../features/car/carSlice';
import {useSelector} from 'react-redux';

function Header() {

    const [burgerStatus,setBurgerStatus]=useState(false);
    
    const cars =useSelector(selectCars);
    
    
    return (
        <Container>
           <a>
               <img src="/images/logo.svg" alt=""/>
           </a>
           <Menu>
            {cars && cars.map((car,index)=>
            <a key={index}href="#">{car}</a>
            
            )}
            {/*<a href="#">Model S</a>
            <a href="#">Model Y</a>
            <a href="#">Model 3</a>
            <a href="#">Model X</a>*/}
           </Menu>
           <RightMenu>
               <a href="#">Shop</a>
               <a href="#">Tesla Account</a>
            <CustomMenu onClick={()=>setBurgerStatus(true)}/>
           </RightMenu>
           <BurgerNav show={burgerStatus}>
           <CloseWrapper>
           <CustomClose onClick={()=>setBurgerStatus(false)}/>
           </CloseWrapper>
           {cars && cars.map((car,index)=>
            <li key={index}><a href="#"></a>{car}</li>
            
            )}
               <li><a href="#"></a>Existing Inventory</li>
               <li><a href="#"></a>Used Inventory</li>
               <li><a href="#"></a>Trade-In</li>
               <li><a href="#"></a>Cyber Truck</li>
               <li><a href="#"></a>Roadster</li>
               
           </BurgerNav>
        </Container>
    )
}


export default Header


const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-tems:center;
padding:0 20px;
margin-top:20px;
top:0;
left:0;
justify-content:space-between;
z-index:+1;
`
const Menu= styled.div`
display:flex;
align-items:center;
flex:1;
justify-content:center;
margin-left:18px;
margin-bottom:25px;
a{
    font-width:600;
    text-decoration:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}

`

const RightMenu= styled.div`
display:flex;
align-items:center;
margin-bottom:25px;
margin-left:860px;

a{
    font-width:600;
    text-decoration:uppercase;
   margin-right:10px;
    flex-wrap:nowrap;
}
`
const CustomMenu=styled(MenuIcon)`

cursor:pointer;

`

const BurgerNav =styled.div`
position:fixed;
top:0;
bottom:0;
background:white;
width:300px;
margin-left:80%;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
transition: transform 0.2s ease-in;
li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
    font-weight:600;
}
}


`

const CustomClose = styled(CloseIcon)`
cursor:pointer;


`

const CloseWrapper =styled.div`

display:flex;
justify-content:flex-end;
`