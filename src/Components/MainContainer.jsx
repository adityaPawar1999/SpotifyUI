
import MainContainerStyle from "./MainContainerStyle";
import AllMusicPodcast from "./MiddleSection/AllMusicPodcast/AllMusicPodcast";
import Header from "./MiddleSection/Header/Header";
import MadeForU from "./MiddleSection/MadeForU/MadeForU";
import YourFavArtist from "./MiddleSection/YourFavArtist/YourFavArtist";
import Rightsection from "./RightSection/Rightsection";
//import LeftSection from './LeftSection/LeftSection'


const MainContainer = () => {
    return (
        <>
            <MainContainerStyle>
                <div className="row ">
                    {/* <div className="col-lg-1 col-sm-12 scrollBar">
                        <LeftSection />
                    </div> */}
                    <div className="col-lg-9 col-sm-12 scrollBar">
                        <Header />
                        <AllMusicPodcast />
                        <MadeForU />
                        <YourFavArtist />
                    </div>
                    <div className="col-lg-3 col-sm-12 scrollBar">
                        <Rightsection />
                    </div>
                </div>
            </MainContainerStyle>
        </>
    )
}
export default MainContainer;