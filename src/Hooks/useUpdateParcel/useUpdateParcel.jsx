
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';

const useUpdateParcel = () => {
    // tanstack query 
    const axiosPublic = useAxiosPublic()
    const { id } = useParams()
    const { data: parcel = [] } = useQuery({
        queryKey: ["parcel", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/parcels/${id}`);
            return res.data;
        }
    })

    return [parcel]
};

export default useUpdateParcel;