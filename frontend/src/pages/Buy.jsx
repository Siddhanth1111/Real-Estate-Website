import { useEffect, useState, useMemo } from "react";
import { BuyCard } from "../components/BuyCard";
import Navbar from "../components/Navbar";
function Buy(){

    const [list,setList] = useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{
        fetch("http://localhost:3000/buy")
        .then((response)=>response.json())    
        .then((data)=>{
            setList(data);
        })
    },[]);
    
    const filteredList = useMemo(()=>{
        return list.filter(x => x.propertyName.toLowerCase().includes(filter.toLowerCase()))
    },[filter,list])

    return(
        
        <div>
        <div style={{padding : 50}} >

        </div>

    <div className="input-container">
    <input 
        className="filter-input"
        placeholder="Search property..."
        onChange={(e) => setFilter(e.target.value)} 
    />
    </div>

            <div className="property-container">
            {filteredList.map((each)=>(
                <BuyCard 
                    propertyId = {each._id}
                    propertyName={each.propertyName}
                    address={each.address}
                    url = {each.url}
                    price = {each.price}
                    userId = {each.userId}
                ></BuyCard>
            ))}
            </div>
            
        </div>
    )
}


export default Buy