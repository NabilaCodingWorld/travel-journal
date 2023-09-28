import { useQuery } from '@tanstack/react-query';

const useDestination = () => {

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