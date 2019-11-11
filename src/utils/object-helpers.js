export const updateObjInArray = (items, itemId, objPropName, newObjProps) =>{
    return items.map(u => {
        if (itemId === u[objPropName]) {
            return {...u, ...newObjProps}
        }
        return u
    })
}