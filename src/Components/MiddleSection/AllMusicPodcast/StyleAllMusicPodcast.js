import styled from "styled-components";

const StyleAllMusicPodcast = styled.div`
padding:2rem;
.list{
    margin-top:2rem;
}

.category{
    margin:.3rem;
    margin-bottom:1rem;
    padding:.4rem .8rem;
    color:${props=>props.theme.colors.White};
    background:${props=>props.theme.colors.LightGray};
    border:none;
    border-radius:30px;
    font-weight:700;
    transition: .5s;
}
.category:hover{
    color:${props=>props.theme.colors.LightGray};
    background:${props=>props.theme.colors.White};
}
.active{
    color:${props=>props.theme.colors.Black};
    background:${props=>props.theme.colors.White};   
}
.album{
    border-right:10px solid  black;
    position:relative;
    display:flex;
    transition: .5s;
    background:${props=>props.theme.colors.DarGray};  
}
.album:hover{
    background:${props=>props.theme.colors.LightGray};     
}
.album:hover .PlayButton{
    display:block;
}
.image{
    position:absolute;
    height:55px;
    left:0;
    width:55px;
    object-fit:cover;
}
.title{
    padding:1.2rem 0 0 4rem;
    font-weight:700;
    font-size:.8rem;
    cursor:pointer;
}
.PlayButton{
    position : absolute;
    top:20%;
    font-size:2rem;
    transition:.5s;
    color:${props=>props.theme.colors.Green}; 
    right:2%;
    display:none;
}
`
export default StyleAllMusicPodcast;