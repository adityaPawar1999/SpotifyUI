import styled from "styled-components";

const StyleRightsection = styled.div`
    border-radius:10px;
    background:${props=>props.theme.colors.DarGray};
.title{
    padding:1rem;
    color:${props=>props.theme.colors.White};
    font-weight:700; 
    display:flex;
    justify-content:space-between;
}
img{
    width:100%;
    height:425px;
    object-fit:cover;
}
.songHeading{
    font-weight:700;
    margin-top:.5rem;
}
.artistName{
    padding-left:1rem;
    padding-top:-1rem;
    color:${props=>props.theme.colors.LightGray};
    font-weight:900;
    padding-bottom:1rem;
}
`
export default StyleRightsection;