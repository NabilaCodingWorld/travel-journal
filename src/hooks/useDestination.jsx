import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const useDestination = () => {

    // const [destinations, setDestinations] = useState([]);

    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     fetch('http://localhost:5000/destination')
    //     .then((res=> res.json()))
    //     .then(data => {
    //         setDestinations(data)
    //         setLoading(false)
    //     } )
    // }, [])

    const {data:destinations = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['destinations'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/destination');
            return res.json();
        }
    })

    return [destinations, loading, refetch];
};

export default useDestination;