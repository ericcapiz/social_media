import Topbar from "../../topbar/Topbar";
import Sidebar from '../../sidebar/Sidebar';
import Feed from "../../feed/Feed";
import Rightbar from "../../rightbar/Rightbar";
import './home.css';


const Home = () => {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}

export default Home
