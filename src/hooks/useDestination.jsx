import { useQuery } from '@tanstack/react-query';

const useDestination = () => {

    const {data:destinations = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['destinations'],
        queryFn: async() => {
            const res = await fetch('https://travel-journal-server.vercel.app/destination');
            return res.json();
        }
    })

    return [destinations, loading, refetch];
};




export default useDestination;