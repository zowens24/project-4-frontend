import { useEffect, useState } from "react";



const SongPage = (props) => {

        const [songsState, setSongsState] = useState({
            songs: []
        });

        useEffect(() => {
            getSongs();
        }, []);

        function getSongs() {
            fetch('/songs')
            .then(res => res.json())
            .then(data => setSongsState({songs: data}))
            .catch(error => console.error(error));
        }


    return (
        <h1>Hello
        </h1>
    )
}

export default SongPage;