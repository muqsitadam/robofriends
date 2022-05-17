import React from "react"
import "tachyons"


const Card = ({name, email, id}) => {
    return(
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow bw3 shadow-5">
            <img alt="robot" src={`https://robohash.org/${id}?200*200`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card;