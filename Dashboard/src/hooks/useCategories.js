import { axiosReq } from 'src/utils/axiosReq';

export const useCategories = () => async () => {
    const { data } = await axiosReq.get('/categories');
    return data.data;
  };

export default useCategories;
