import React from 'react'

function CommentBox(prop) {

    const CommStyle = {
        backgroundColor: 'white',
        border: '1px solid #D9D9D9',
        borderRadius: '5px'
    }

    const formDate = prop.values.updated_at.split('T')

    const FormData = (data) => {
        const data1 = data.replace(/%731%/g, '"')
        const data2 = data1.replace(/%732%/g, '\n')
        return data2
    }

    return (
        <div className='col-12 mt-1' style={CommStyle}>
            <div className='row ml-2 mr-2 mt-2 align-items-end'>
                <strong className='m-0 p-0'>{FormData(prop.values.userid)}</strong>
                <small className='ml-2'>{formDate[0]}</small>
            </div>
            <div className='row mr-2 ml-2 mt-1'>
                <p className='m-0 p-0 mb-2'>{FormData(prop.values.comment)}</p>
            </div>
        </div>
    )
}

export default CommentBox
