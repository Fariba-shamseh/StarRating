import {StrictMode, useState} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.jsx";
import "./index.css";


function Test() {
    const [movieRating, setMovieRating] = useState(0);
    return (
        <div>
            <App color="pink" maxRating={10} onSetRating={setMovieRating}/>
            <p>THIS movie was rated {movieRating} stars</p>
        </div>
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Test/>
        {/*<App maxRating={10}/>*/}
        {/*<App maxRating={7} color="red" size={42}/>*/}
        {/*<App maxRating={5} size={40} color="green" message={["Terrible", "Bad", "Okay", "Good", "Amazing"]}/>*/}
        {/*<App size={35} color="blue" className="test"/>*/}
        {/*<App size={30} color="purple" className="test" defaultRating={2}/>*/}
    </StrictMode>
);
