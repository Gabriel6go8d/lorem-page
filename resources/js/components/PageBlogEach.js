import React from 'react'
import MyNavbar from './MyNavbar'
import BlogContent from './BlogContent'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection';

function PageBlogEach() {
    return (
        <div>
            <MyNavbar/>
            <BlogContent/>  
            <div className='container mt-5' id='ComSection'>
                <h3>Please Leave a Comment</h3>
                <CommentForm action='/blogcomments/create' setid={JSON.parse(jsonBlogstoShow).id}/> 
                <CommentSection data={JSON.parse(jsonCommentstoShow)}/>
            </div>
               
        </div>
    )
}

export default PageBlogEach
