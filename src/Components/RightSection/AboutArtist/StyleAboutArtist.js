import styled from "styled-components";

const StyleAboutArtist = styled.div`
font-size:.9rem;
font-weight:400;
padding:1rem;
color:${props => props.theme.colors.LightGray};
span{
color:${props => props.theme.colors.White};
font-weight:700;
}
.play{
    margin-left:2rem;
    padding:.4rem 2rem;
    color:${props=>props.theme.colors.Dark};
    background:${props=>props.theme.colors.Green};
    border:none;
    border-radius:30px;
    font-weight:700;
}
`
export default StyleAboutArtist;