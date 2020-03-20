import React from 'react'

const Content = props => {
    console.log(props.parts)
    return (
        <div>
            <p>
                {props.partsName}
            </p>
        </div>
    )
} 

export default Content