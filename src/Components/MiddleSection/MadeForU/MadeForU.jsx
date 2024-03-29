
import songsData from "../../../SongsData";
import StyleMadeForU from "./StyleMadeForU"


import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const MadeForU = () => {
    return (<>
        <StyleMadeForU>
            <div className=" title">
                <h4>Made For You :</h4>
                <button>Show All</button>
            </div>
            <div className="row g-1">
                {
                    songsData.slice(0, 8).reverse().map((value, index) => {
                        return (<>
                            <div className="col-lg-3 col-md-4 col-sm-6 artistData" key={index}>
                                <div className="imgData">
                                    <img
                                        className="image1"
                                        src={value.song_image}
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
        </StyleMadeForU>
    </>)
}
export default MadeForU;