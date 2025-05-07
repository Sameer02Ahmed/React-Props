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
    <h1>{props.item.car}</h1>
    <img src={props.item.image} width="200" height="200"/>
    <h3>Model: {props.item.model}</h3>
    <p>Price: PKR: {props.item.price}</p>
    </>
    )
}

export default Carlist