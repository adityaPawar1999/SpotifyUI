import LeftSectionStyle from "./LeftsectionStyle"

import data from './../../SongsData';

import AppsIcon from '@mui/icons-material/Apps';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
//import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LeftSection = () => {
    return (
        <LeftSectionStyle>
            <div className="LeftSection_box1">
                <AppsIcon className="homePageIcon" /><br />
                <ManageSearchIcon className="SearchBarIcon" />
            </div>
            <div className="LeftSection_box2">
                <FavoriteIcon className="homePageIcon likedSongs" />
                {
                    data.map((value, index) => {
                        return (
                            <>
                                <div key={index}>
                                    <img
                                        className="LeftSection_box2_album"
                                        src={value.song_image}
                                        alt={value.song_name}
                                    />
                                </div>
                            </>
                        )
                    })
                }


            </div>
        </LeftSectionStyle>
    )
}
export default LeftSection;