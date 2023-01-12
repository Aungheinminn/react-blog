import React from "react";
import { Link, useParams } from "react-router-dom";
import EmptyList from "../../components/BlogList/EmptyList";
import { blogList } from "../../config/data";
import classes from "./style.module.css";

const BlogPage = () =>{
    const {id} = useParams();
    let blog = blogList.find(blog => blog.id === parseInt(id)) ?? null;
    
    return(

            <div className={classes.main}>
                <div>
                    <Link to="/" className={classes.link}>Go Back</Link>
                </div>
                {
                    blog ?
                        <div className={classes.blogContainer}>
                            <div className={classes.inner}>

                              \
                                <h1 className={classes.title}>{blog.title}</h1>
                                <div className={classes.badges}>
                                    <p className={classes.category}>{blog.category}</p>
                                    {blog.subCategory.map(item =>{
                                        return <p className={classes.subCategory}>{item}</p>

                                    })}
                                    
                                </div>
                                <div>
                                    <img src={blog.cover} alt="cover" className={classes.cover} />
                                </div>
                               
                                <div className={classes.content}>
                                    <p>{blog.description}</p>
                                </div>
                                <footer className={classes.footer}>
                                    <div className={classes.authorDiv}>
                                        <img className={classes.avatar} src={blog.authorAvatar} alt="authorAvatar" />
                                        <p>{blog.authorName}</p>
                                    </div>
                                    
                                    <b>{blog.createdAt}</b>
                                </footer> 
                              

                             </div>

                        </div> : <EmptyList />
                }
           

            </div>

    )
}

export default BlogPage;
