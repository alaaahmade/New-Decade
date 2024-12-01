import { axiosReq } from 'src/utils/axiosReq';

export const useSubcategories = (selectedCategory) => {
  if (selectedCategory) {
    return async (categoryId) => {
      const { data } = await axiosReq.get(`subcategories/${categoryId}`);
      return data.data;
    };
  }
  return () => {};
};

