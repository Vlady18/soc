import React, {useState} from 'react'
import classes from "./Pagination.module.css";
const Pagination = ({totalUserCount, pageSize, currentPage, changeCurrentPage, portionSize = 10}) => {
    let pageCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (var i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            {portionNumber > 1 && <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>Back</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                return <span onClick={()=>{changeCurrentPage(p)}} key={p} className={currentPage === p ? classes.current_page : null}>{p}</span>
            })
            }
            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>Next</button>}
        </div>
    )
}


export default Pagination