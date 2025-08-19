import Card from "./Card"

export const CardsContainer = ({title, cardsArray}) => {
    return (
        <div className="container">
            <h2 className="text-danger">{title}</h2>
            <div className="container d-flex flex-wrap gap-3 overflow-x-auto">
            {cardsArray?.map(item=><Card key={item.name} info={item}/>)}
            </div>
        </div>
    )
}