import styled from "styled-components";

const HeaderStyle = styled.div`
    color:${props=>props.theme.colors.White};
.header{
    background-image: linear-gradient(#000000, #121212);
    border-radius:10px;
}
.advertise{
    position:relative;
    margin-bottom:1rem;
}
.Sponsored{
    position:absolute;
    top:50%;
    right:5%;
    font-weight:700;
}
.headerImage{
    height:250px;
    padding:1rem;
    border-radius:10px;
}.content{
    padding-top:.5rem;
    padding-left:3rem;
}
.playlist{
    padding-top:1rem;
    font-weight:700;
}
.title{
    font-size:3rem;
    font-weight:700;
}
.subtitle{
    fomt-size:2rem;
    color:gray;
    font-weight:600; 
}
button{
    margin:.3rem;
    padding:.4rem 3rem;
    color:${props=>props.theme.colors.Dark};
    background:${props=>props.theme.colors.Green};
    border:none;
    border-radius:30px;
    font-weight:700;
    transition:.5s;
}
button:hover{
    opacity:.7;
}
.follow{
    color:${props=>props.theme.colors.White};
    background:none;
    border:2px solid ${props=>props.theme.colors.White};
    transition:.5s;
}
.follow:hover{
    color:${props=>props.theme.colors.White};
    background:${props=>props.theme.colors.LightGray};
    border:2px solid ${props=>props.theme.colors.LightGray};
}
`
export default HeaderStyle;