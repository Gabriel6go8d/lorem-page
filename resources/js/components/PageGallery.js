import React from 'react'
import MyNavbar from './MyNavbar';
import CommentForm from './CommentForm';
import Corrousel from './Corrousel'
import CommentSection from './CommentSection';

function PageGallery(prop) {   

    return (
        <div>            
            <MyNavbar location={prop.location.pathname}/>    
                 
            <div className='container mt-3'>
                <Corrousel/>      
                <h1 className='mt-3' id='ComDiv'>Gallery Page - Please Leave a Comment</h1>
                <CommentForm action='/gallerycomments/create' setid='1'/>
                <CommentSection data={JSON.parse(jsonGalleryComments)}/>
            </div>            
        </div>
    )
}

export default PageGallery
