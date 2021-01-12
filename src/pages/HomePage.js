import {Link} from 'react-router-dom';


const HomePage = (props) => {
    return (
        <div className="HomePage">
           
            
        <Link to= '/songs' className="songlink" >CLICK HERE TO VIEW YOUR PLAYLIST</Link>
        <h3>Welcome to Tune It Up!</h3>
        </div>
        
        
    )
}

export default HomePage;