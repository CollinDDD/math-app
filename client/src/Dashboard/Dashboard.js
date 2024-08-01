import "./Dashboard.css";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";
import { Link } from "react-router-dom";



function Dashboard() {
    return (
        <>
        
        <div className="home-container">
            <h1 className="title">Arithme Timer</h1>
            <h2 className="header">Choose a category to begin</h2>
            <div className="icons-top">
                <div className="symbols">
                    <h3>Addition</h3>
                    <Link to="/addition" className="link"><FaPlus /></Link> 
                </div>
                <div className="symbols">
                    <h3>Subtraction</h3>
                   <Link to="/subtraction" className="link"><FaMinus /></Link> 
                </div>
                
            </div>
            <div className="vertical-line"></div>
            <div className="icons-bottom">
                <div className="symbols">
                    <h3>Multiplication</h3>
                    <Link to="/multiplication" className="link"><FaTimes /></Link> 
                </div>
                <div className="symbols">
                    <h3>Division</h3>
                    <Link to="/division" className="link"><FaDivide /></Link> 
                </div>
            </div>
            
        </div>        
        </>

    );
}
export default Dashboard;