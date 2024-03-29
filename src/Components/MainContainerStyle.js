import styled from "styled-components";

const MainContainerStyle = styled.div`
padding:1rem;
background:${props=>props.theme.colors.Black};
color:${props=>props.theme.colors.White};

.scrollBar {
    height: 96vh;
    overflow-y: auto;
    scrollbar-width: thin; 
    scrollbar-color: #393939 black;
    box-sizing: border-box;
}

.scrollBar::-webkit-scrollbar {
    width: 8px; 
}

.scrollBar::-webkit-scrollbar-track {
    background: red; 
}

.scrollBar::-webkit-scrollbar-thumb {
    background: yellow;
}

.scrollBar::-webkit-scrollbar-thumb:hover {
    background: green; 
}

`
export default MainContainerStyle;