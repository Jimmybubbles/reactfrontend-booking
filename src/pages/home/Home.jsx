import "./Home.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";

const Home = () => {
    return(
        <div>
            <Navbar/>
            <Header/>
            <div className="homeContainer">
            <Featured/>
            <div className="homeTitle">Browse a property type</div>
            <PropertyList/>
            </div>
        </div>

    )
}

export default Home;