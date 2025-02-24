import { useState } from "react";
import MapChart from "./MapChart";

//dropdown list for selecting category
function Dropdown({ selected, onSelected }) {
    ///const [content, setContent] = useState("");
    const [isActive, setIsActive] = useState(false);
    const options = ["Summer", "Winter", "Music and Arts", "Sports"];
    //const{data, loading, error} = useFetch("/map?tag");
    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                {selected}
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div
                            onClick={(e) => {
                                onSelected(option);
                                setIsActive(false);
                            }}
                            className="dropdown-item"
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
export default Dropdown;
