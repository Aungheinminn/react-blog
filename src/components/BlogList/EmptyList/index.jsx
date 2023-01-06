import React from "react";
import classes from "./style.module.css";

const EmptyList = () =>{
    return(
        <div className={classes.container}>
            {/* <div className={classes.img}>
                
            </div> */}
            {/* <img src="./emptyPhoto/13525-empty.gif" alt="empty" /> */}
            <h1>
               Not Found
            </h1>
        </div>
    )
}
export default EmptyList;