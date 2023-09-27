import React from 'react';
import './Button.css';

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

    let pages = [];

    for(let i =1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i);
    }

    return (
        <center className='mb-10'>
            {
                pages.map((page, index)=>{
                    return <button onClick={()=> setCurrentPage(page)} className={ page == currentPage ? 'active': 'button' }key={index}>{page}</button>
                })
            } 
        </center>
    );
};

export default Pagination;