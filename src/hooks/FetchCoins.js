import { useEffect, useState } from "react"

export function fetchCoins(url){
    const [coins,setCoins]=useState(null)
    
    const getCoins=async()=>{
        let res, data;
        try{
            res = await fetch(url)
            if (!res.ok) throw new Error('Moneda no encontrada')
            data = await res.json()
            setCoins(data);
        }catch (err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getCoins()
    },[])
    return {coins}
}