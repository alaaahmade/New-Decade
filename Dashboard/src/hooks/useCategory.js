import { axiosReq } from 'src/utils/axiosReq';



export  const useCategory = (id) => async ()=> {
    const { data } = await axiosReq.get(`/categories/${id}`);

    return data.data;
  };

