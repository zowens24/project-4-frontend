import { useEffect, useState } from "react";
import Main from '../components/Main';


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
        <div>
            <Main
            songs={songsState.songs}
            />
        </div>
        
    )
}

export default SongPage;