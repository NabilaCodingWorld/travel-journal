import { useQuery } from "@tanstack/react-query";


// import { createLogger } from "vite";
import axios from "axios";
import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";


const  useCheckRole = () =>{
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const {data: role = ''} = useQuery({
        queryKey: ['role', user?.email],
        enabled:!loading && !!user,
        queryFn: async () =>{
            const res = await axios(`https://travel-journal-server.vercel.app/role/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return [role]
}

export default useCheckRole;