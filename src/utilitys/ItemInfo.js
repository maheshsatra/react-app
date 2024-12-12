
export const getTitels =(name)=>{
    let newName = ""
    for(let i in name){
        if(i <= 20){
            newName = newName + name[i]
    }
    }
    return newName + "..."
}

export const getPrice = (price)=>{
    let newPrice = price.toFixed(2)
    return `₹ ${newPrice}`
}