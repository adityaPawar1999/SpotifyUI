import styled from "styled-components";

const StyleMadeForU = styled.div`
padding:2rem;
.title{
    color:${props=> props.theme.colors.White};
    display:flex;
    margin-top:4rem;
    justify-content:space-between;
}
.title h3{
    font-weight:800;
}

button{
    margin:.3rem;
    padding:.2rem .9rem;
    background:${props=>props.theme.colors.LightGray};
    border:none;
    font-size:.9rem;
    border-radius:30px;
    font-weight:400;
   color:${props=>props.theme.colors.White};
}


.artistData{
    transition:.5s;
}
.artistData:hover{
    background:${props=>props.theme.colors.DarGray};
}
.imgData{
    position:relative;
    margin-top:1rem;
}
.image1{
    object-fit:cover;
    width:100%;
    height:150px;
    transition:.5s;
}
.PlayButton1 {
    position: absolute;
    right: 10%;
    bottom: 10%;
    font-size: 2.5rem;
    color: ${props => props.theme.colors.Green};
    display: none; 
    transition:.5s;
}

.imgData:hover .image1 {
    filter:brightness(30%);
}
.imgData:hover .PlayButton1 {
    display: block; 
}
.songName{
    padding-left:1rem;
    margin-top:.5rem;
    font-size:1.2rem;
    font-weight:700;
}
.artistName{
    font-size:.8rem;
    font-weight:600;
}
`
export default StyleMadeForU;