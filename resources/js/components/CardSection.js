import React from 'react'
import CardSectionA from './CardSectionA'

function CardSection(prop) {
    console.log(blogstoShow)
    const allList = JSON.parse(blogstoShow)

    const List = allList.slice(0, prop.showNum)
    const toShow = List.map( xx => <CardSectionA values={xx} key={xx.id}/>)

    return (
        <div className='container'>
            <div className='row justify-content-around'>
                {toShow}
            </div>
        </div>
    )
}

export default CardSection
