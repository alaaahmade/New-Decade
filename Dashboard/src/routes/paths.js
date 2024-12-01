// ----------------------------------------------------------------------

import { axiosReq } from 'src/utils/axiosReq';

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

const deleteService =async (id, coverUrl, ) => {
  try{

    await axiosReq.post('/deleteFile', {
      fileUrl: coverUrl
    })

    await axiosReq.delete(`/services/delete/${id}`, {
      method: 'DELETE',
    })
    window.location.reload()
  }catch(err){
    console.log(err);
  }
}

const deleteProduct =async (id, coverUrl, ) => {
  try{

    await axiosReq.post('/deleteFile', {
      fileUrl: coverUrl
    })

    await axiosReq.delete(`/products/delete/${id}`, {
      method: 'DELETE',
    })
    window.location.reload()
  }catch(err){
    console.log(err);
  }
}




export const paths = {
  // AUTH
  auth: {
    root: ROOTS.AUTH,
    login: `${ROOTS.AUTH}/login`,
    signup: `${ROOTS.AUTH}/signup`,
    forgotpassword: `${ROOTS.AUTH}/forgotpassword`,
  },
  
  // DASHBOARD
  dashboard: {
    edit: {
      header: `${ROOTS.DASHBOARD}/edit/header`,
      footer: `${ROOTS.DASHBOARD}/edit/footer`,
      hero: `${ROOTS.DASHBOARD}/edit/hero`,
      about: `${ROOTS.DASHBOARD}/edit/about`,
      avenues: `${ROOTS.DASHBOARD}/edit/avenues`,
      modular: `${ROOTS.DASHBOARD}/edit/modular`,
      advantage: `${ROOTS.DASHBOARD}/edit/advantage`,
      customerWords: `${ROOTS.DASHBOARD}/edit/customerWords`,
      logisticsSolutions : `${ROOTS.DASHBOARD}/edit/logisticsSolutions`,
      latestInsights: `${ROOTS.DASHBOARD}/edit/latestInsights`,
      challenges: `${ROOTS.DASHBOARD}/edit/challenges`,
      trusted: `${ROOTS.DASHBOARD}/edit/trusted`,
      platform: {
        hero: `${ROOTS.DASHBOARD}/edit/platform/hero`,
        about: `${ROOTS.DASHBOARD}/edit/platform/about`,
        three:  `${ROOTS.DASHBOARD}/edit/platform/three`
      }
    },
    root: ROOTS.DASHBOARD,
    one: `${ROOTS.DASHBOARD}/Home`,
    two: `${ROOTS.DASHBOARD}/CreateProject`,
    three: `${ROOTS.DASHBOARD}/Account/SharedWithMeDetail`,
    seven: `${ROOTS.DASHBOARD}/Account/SupportDetail`,
    details: (id) => `${ROOTS.DASHBOARD}/details/${id}`,
    service:{
      root: `${ROOTS.DASHBOARD}/list/service`,
      createService: `${ROOTS.DASHBOARD}/create/service`,
      listService: `${ROOTS.DASHBOARD}/list/service`,
      editService: (id) => `${ROOTS.DASHBOARD}/edit/service/${id}`,
      deleteService: (id, coverUrl) => deleteService(id, coverUrl),
      details: (id) => `${ROOTS.DASHBOARD}/details/service/${id}`,
    },
    product:{
      root: `${ROOTS.DASHBOARD}/list/product`,
      createProduct: `${ROOTS.DASHBOARD}/create/product`,
      listProduct: `${ROOTS.DASHBOARD}/list/product`,
      editProduct: (id) => `${ROOTS.DASHBOARD}/edit/product/${id}`,
      deleteProduct: (id, coverUrl) => deleteProduct(id, coverUrl),
      details: (id) => `${ROOTS.DASHBOARD}/details/product/${id}`,
    },
    categories: {
      root: `${ROOTS.DASHBOARD}/categories`,
    },

    group: {
      root: `${ROOTS.DASHBOARD}/user`,
      five: `${ROOTS.DASHBOARD}/user/settings`,
      six: `${ROOTS.DASHBOARD}/user/six`,
    },
  },
};
