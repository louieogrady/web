import React from "react";
import "./bounce.scss";
import l from "../images/edit-lou.jpg";

class Bounce extends React.Component {
    render() {
        return (
            <div className="bounce">
                <div class="x">
                    <img class="y" src={l} alt="bounce" />
                </div>
            </div>
        )
    }
}

export default Bounce