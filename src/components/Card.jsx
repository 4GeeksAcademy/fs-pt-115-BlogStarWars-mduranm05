import { useState, useEffect } from "react"

const Card = ({info}) => {
    const [cardData, setCardData]=useState({})
   useEffect(() => {
        fetch(info.url)
            .then(res => res.json())
            .then(data => setCardData(data.result.properties))
            .catch(err => console.error(err))
    }, [])
    
    return (
        <div className="card" style={{width: 250}}>
            <img src="https://placehold.co/400x200" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{info.name}</h5>
                    <p className="card-text">gender: {cardData?.gender}</p>
                    <p className="card-text">hair color: {cardData?.hair_color}</p>
                    <p className="card-text">eye color: {cardData?.eye_color}</p>
                    <a href="#" className="btn btn-outline-primary">Learn more!</a>
                    <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></a>
                </div>
        </div>
    )
}

export default Card;