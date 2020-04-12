import React from 'react'
import CommentBox from './CommentBox'

function CommentSection(prop) {
    
    const toShow = prop.data.map( xx => <CommentBox key={xx.id} values={xx}/>)

    return (
        <React.Fragment>
            {toShow}
        </React.Fragment>
    )
}

export default CommentSection
