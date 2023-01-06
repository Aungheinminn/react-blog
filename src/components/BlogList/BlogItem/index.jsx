import React from "react";
import CategoryBadge from "../CategoryBadge";
import classes from "./style.module.css";
// import { blogList } from "../../../config/data";
import { Link } from "react-router-dom";

const BlogItem = ({blog:{
    id,
    description,
    title,
    category,
    subCategory,
    authorName,
    authorAvatar,
    createdAt,
    cover
}}) =>{
    return (
        <div className={classes.container}>
            
            <img className={classes.imgCover} src={cover} alt="cover" />
            <CategoryBadge label={category} />
            <h3 className={classes.title}>{title}</h3>
            <p className={classes.description}>{description}</p>

            <footer>
                <div className={classes.author}>
                    <img className={classes.authorAvatar} src={authorAvatar} alt="authorAvatar" />
                    <div>
                        <h6 className={classes.authorName}>{authorName}</h6>
                        <p className={classes.createdAt}>{createdAt}</p>
                    </div>
                  

                </div>
                <Link className={classes.link} to={`/blog/${id}`}>Detail</Link>
            </footer>
        </div>
    )
}
export default BlogItem;