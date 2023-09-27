import React, { useState } from 'react';
import useDestination from '../../hooks/useDestination';
import Photo from './Photo';
import Pagination from '../Pagination/Pagination';

const Gallery = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(9);

    const [destinations, loading] = useDestination();

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = destinations.slice(firstPostIndex, lastPostIndex);

    if (loading) {
        // Render a loading indicator here, such as a spinner or a message
        return <center><span className="loading loading-ring loading-lg my-2"></span></center>;
    }

    return (
        <>
            <div className='grid md:grid-cols-3 gap-3 my-10 mx-5'>
                {
                    currentPosts.map(destination => <Photo key={destination._id} destination={destination} />)
                }

            </div>

            <div>

                <Pagination
                    totalPosts={destinations.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Pagination>

            </div>
        </>
    );
};

export default Gallery;
