import songsData from "../../../SongsData";
import StyleAllMusicPodcast from "./StyleAllMusicPodcast";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const AllMusicPodcast = () => {
    return (<>
        <StyleAllMusicPodcast>
            <div className="list">
                <button className="category active">All</button>
                <button className="category">Music</button>
                <button className="category">Podcasts</button>
            </div>
            <div className="row g-7">
                {
                    songsData.slice(1, 11).map((value, index) => {
                        return (<>
                            <div className="col-lg-3 col-md-4 col-sm-6 album g-2" key={index}>
                                <img
                                    className="image"
                                    src={value.song_image}
                                    alt={value.song_name}
                                />
                                <p className="title">{value.song_name}</p>
                                <PlayCircleIcon className="PlayButton" />
                            </div>
                        </>)
                    })
                }
            </div>
        </StyleAllMusicPodcast>
    </>)
}
export default AllMusicPodcast;