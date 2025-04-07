import { useEffect, useState } from "react";
import { BuyCard } from "../components/BuyCard";

function Buy(){

    const [list,setList] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3000/buy")
        .then((response)=>response.json())
        .then((data)=>{
            setList(data);
        })
    },[]);
    


    return(
        <div>
            {list.map((each)=>(
                <BuyCard propertyName={each.propertyName}
                    address={each.address}
                    url = {each.url}
                    price = {each.price}
                ></BuyCard>
            ))}
        </div>
    )
}


export default Buy