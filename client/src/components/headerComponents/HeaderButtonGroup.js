import React from 'react';
import "./HeaderButtonGroup.scss";

export default (props) => {

    const styles = {}
    
    // if (props.pull === "left") {
    //     styles['alignContent'] = "flex-start";
    // }
    // if (props.pull === "right") {
    //     styles['alignContent'] = "flex-end";
    // }

    console.log(styles);

    return (
        <div className="headerButtonGroup" style={styles}>
            {props.children}
        </div>
    )
}