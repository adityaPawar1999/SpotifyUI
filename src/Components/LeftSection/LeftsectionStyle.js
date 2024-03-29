import styled from "styled-components";

const LeftSectionStyle = styled.div`
  .LeftSection_box1 {
    border-radius: 10px;
    background: ${props => props.theme.colors.DarGray};
    padding-left: 2.3rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .homePageIcon,
  .SearchBarIcon {
    font-size: 2.1rem;
    color: ${props => props.theme.colors.White};
  }

  .LeftSection_box2 {
    margin-top: 0.5rem;
    border-radius: 10px;
    background: ${props => props.theme.colors.DarGray};
    padding: 1rem 1rem 1rem 1.5rem;
  }

  .likedSongs {
    margin-top: 0.5rem;
    border-radius: 10px;
    border: 1px solid #fff;
    padding: 0.5rem;
    width: 90%;
  }

  .LeftSection_box2_album {
    margin-top: 0.8rem;
    height: 55px;
    width: 55px;
    border-radius: 10px;
    object-fit: cover;
  }

  // Media queries for responsiveness
  @media screen and (max-width: 768px) {
    .LeftSection_box1 {
      padding-left: 1.5rem;
    }

    .homePageIcon,
    .SearchBarIcon {
      font-size: 1.8rem;
    }

    .LeftSection_box2 {
      padding: 0.8rem 0.8rem 0.8rem 1.2rem;
    }

    .likedSongs {
      width: 85%;
    }
  }

  @media screen and (max-width: 576px) {
    .LeftSection_box1 {
      padding-left: 1rem;
    }

    .homePageIcon,
    .SearchBarIcon {
      font-size: 1.6rem;
    }

    .LeftSection_box2 {
      padding: 0.6rem 0.6rem 0.6rem 1rem;
      float:left;
    }

    .likedSongs {
      width: 80%;
    }
  }
`;

export default LeftSectionStyle;
