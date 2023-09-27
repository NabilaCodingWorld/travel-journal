import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCarts = () => {

    const {user, loading} = useAuth();

    // const token = localStorage.getItem('access-token')

    const [axiosSecure] = useAxiosSecure();

    const {refetch, data:cart=[]} = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', response)
            return response.data;
        }
    })

    return [cart, refetch]
};

export default useCarts;