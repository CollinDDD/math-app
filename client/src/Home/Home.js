import "../Home/Home.css";
import { FaPlus, FaMinus, FaTimes, FaDivide } from "react-icons/fa";



function Home() {
    return (
        <>
        <div className="home-container">
            <h2 className="header">Choose a category to begin</h2>
            <div className="icons-top">
                <div className="symbols">
                    <h3>Addition</h3>
                    <button><FaPlus /></button> 
                </div>
                <div className="symbols">
                    <h3>Subtraction</h3>
                   <button><FaMinus /></button> 
                </div>
                
            </div>
            <div className="icons-bottom">
                <div className="symbols">
                    <h3>Multiplication</h3>
                    <button><FaTimes /></button> 
                </div>
                <div className="symbols">
                    <h3>Division</h3>
                    <button><FaDivide /></button> 
                </div>
            </div>
            
        </div>        
        </>

    );
}
export default Home;