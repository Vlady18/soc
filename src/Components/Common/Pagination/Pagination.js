import React, {useState} from 'react'
import classes from "./Pagination.module.css";
const Pagination = ({totalUserCount, pageSize, currentPage, changeCurrentPage, portionSize = 10}) => {
    let pageCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (var i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let {portionNumber, setPortionNumber} = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            {
                pages.filter(p => {
                   return p >= leftPortionPageNumber && p <= rightPortionPageNumber
                })
                .map(p => {
                return <span onClick={()=>{changeCurrentPage(p)}} className={currentPage === p ? classes.current_page : null}>{p}</span>
            })
            }
        </div>
    )
}


export default Pagination