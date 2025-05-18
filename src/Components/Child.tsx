import "../App.css"
type Props = {
    item : {
        car : string;
        image : string;
        model : number;
        price : number;
     }
}

const Carlist = (props: Props) => {
    return(
        <>
    <h2 className="font-semibold text-xl">{props.item.car}</h2>
    <img src={props.item.image} width="200" height="200"/>
    <h3 className="font-medium text-base">Model: {props.item.model}</h3>
    <p className="text-base font-medium">Price: PKR: {props.item.price}</p>
    </>
    )
}

export default Carlist