import HeaderStyle from "./HeaderStyle"

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <div className=" row header">
                    <div className="col-lg-4 ">
                        <img className="headerImage" src="https://tse4.mm.bing.net/th?id=OIP.UljMEhKSgt_aVd6F4DbVuwHaE7&pid=Api&P=0&h=180" alt="header" />
                    </div>
                    <div className="col-lg-8 content">
                        <div className="advertise">
                            <p className="playlist">Playlist</p>
                            <p className="Sponsored">Sponsored</p>
                        </div>
                        <h1 className="title">Emaiway Bantai</h1>
                        <p className="subtitle">Listen The Most Relaxing Love Songs Only On Spotify! Play Now</p>
                        <button className="play">
                            PLAY
                        </button>
                        <button className="follow">
                            Follow
                        </button>
                    </div>
                </div>
            </HeaderStyle >
        </>
    )
}
export default Header