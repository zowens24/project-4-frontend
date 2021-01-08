

function Song(props) {
    return (
        <div>
            <h3>{props.song.title}</h3>
            <h3>{props.song.artist}</h3>
        </div>   
    )
}

export default Song;
