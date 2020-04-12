import React from 'react'
import MyNavbar from './MyNavbar'
import AddBlogForm from './AddBlogForm'

function PageAddBlog() {
    return (
        <div>
            <MyNavbar/>
            <div className='container mt-5'>
                <AddBlogForm/>
            </div>
        </div>
    )
}

export default PageAddBlog
