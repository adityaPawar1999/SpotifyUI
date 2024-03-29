import StyleRightsection from "./StyleRightsection";

import CancelIcon from '@mui/icons-material/Cancel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AboutArtist from "./AboutArtist/AboutArtist";

const Rightsection = () => {
    return (<>
        <StyleRightsection>
            <div className="container g-0">
                <div className="title">
                    <p>PSY</p>
                    <CancelIcon />
                </div>
                <div className="image">
                    <img
                        alt="img"
                        src="https://tse2.mm.bing.net/th?id=OIP.TkraEmFOYI88e0S4gjcGSgHaE9&pid=Api&P=0&h=180"
                    />
                </div>
                <div className="title songHeading">
                    <h3>PSY</h3>
                    <MoreHorizIcon />
                </div>
            </div>
            <AboutArtist />
        </StyleRightsection>
    </>)
}
export default Rightsection;