export default function ProductCard(props){
    console.log((props));
    return(
        <div>
            <h1 className="text-4xl font-bold">{props.name}</h1>
            <p className="text-2xl font-bold">${props.price.toFixed(2)}</p>
            <p className="text-lg">{props.description}</p>
        </div>
    )
}