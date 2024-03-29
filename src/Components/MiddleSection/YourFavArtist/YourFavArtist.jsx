





import songsData from "../../../SongsData";
import StyleYourFavArtist from "./StyleYourFavArtist"


import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const YourFavArtist = () => {
    return (<>
        <StyleYourFavArtist>
            <div className=" title">
                <h4>Your Favourite Artist :</h4>
                <button>Show All</button>
            </div>
            <div className="row g-1">
                {
                    songsData.slice(5, 9).map((value, index) => {
                        return (<>
                            <div className="col-lg-3 col-md-6 col-sm-1 artistData" key={index}>
                                <div className="imgData">
                                    <img
                                        className="image1"
                                        src={value.artist_image}
                                        alt={value.artist_name}
                                    />
                                    <PlayCircleIcon className="PlayButton1" />
                                </div>
                                <p className="songName">{value.song_name}<br />
                                    <span className="artistName">{value.artist_name}</span>
                                </p>

                            </div>
                        </>)
                    })
                }
            </div>
        </StyleYourFavArtist>
    </>)
}
export default YourFavArtist;