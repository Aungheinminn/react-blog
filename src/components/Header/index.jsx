import React from "react";
import classes from "./style.module.css";

const Header = () =>{
    return(

        <div className={classes.container}>
            <div>
                <h3 className={classes.title}>Inc. This Morning</h3>
                <h1 className={classes.subtitle}>
                    <span className={classes.spn}>"   </span>
                    Blog
                    <span className={classes.spn}>   "</span>
                </h1>
                <footer>
                    <p className={classes.p}>awesome place to make oneself</p>
                    <p className={classes.p}>productive and entertained through daily update</p>
                </footer>
                
            </div>
            
        </div>
    )
}

export default Header;