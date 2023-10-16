import React, { useState } from 'react';
import Cover from '../Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import useDestination from '../../../hooks/useDestination';
import VisitDestination from '../VisitDestination/VisitDestination';
import './Destination.css'
import Pagination from '../../Pagination/Pagination';



const Destination = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(6);

    const [destinations, loading] = useDestination();


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    const currentPosts = destinations.slice(firstPostIndex, lastPostIndex);

    if (loading) {
        // Render a loading indicator here, such as a spinner or a message
        return <center><span className="loading loading-ring loading-lg my-2"></span></center>;
    }



    return (
        <div>
            <Cover></Cover>
            <br /> <br />

            <div>
                <div className='mx-auto max-w-7xl grid md:grid-cols-3 gap-10'>
                    {
                        currentPosts.map(place => <VisitDestination key={place._id} place={place}></VisitDestination>)
                    }
                </div>

                <Pagination
                    totalPosts={destinations.length}
                    postsPerPage={postsPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Pagination>
            </div>
        </div>
    );
};

export default Destination;