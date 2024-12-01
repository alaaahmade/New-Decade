/* eslint-disable no-console */
import { createContext, useEffect, useMemo, useState } from 'react';
import { axiosReq } from 'src/utils/axiosReq';
import PropTypes from 'prop-types';

const DashboardContext = createContext();
const ProvideDashboard = ({ children }) => {
  const [checkedProducts, setIsCheckedProducts] = useState([]);
  const [searchFilterCategory, setSearchFilterCategory] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [openSideBar, setOpenSideBar] = useState(false);
  const [products, setProducts] = useState([]);
  const [editIdProduct, setEditIdProduct] = useState(0);
  const [openEditProduct, setOpenEditProduct] = useState(false);
  // Begen Products Managment States

  // Begen Services Managment States
  const [checkedServices, setIsCheckedServices] = useState([]);
  const [servicesSearch, setServicesSearch] = useState('');
  const [openAddService, setOpenAddService] = useState(false);
  const [services, setServices] = useState([]);
  const [openEditService, setOpenEditService] = useState(false);
  const [editIdService, setEditIdService] = useState(0);
  // End Services Managment States

  // Begen Contact Managment States
  const [contacts, setContacts] = useState([]);
  const [openShowContact, setOpenShowContact] = useState(false);
  const [slectedContact, setSlectedContact] = useState(0);
  // End Services Managment States

  // Begen Conferm Action Dialog
  const [openConfermAlert, setOpenConfermAlert] = useState(false);
  const [confermMessage, setConfermMessage] = useState('');
  const [confermHandler, setConfermHandler] = useState() 
  // End Conferm Action Dialog

  useEffect(() => {
    // (async () => {
    //   if (productSearch && searchFilterCategory) {
    //     const { data } = await axiosReq.get(
    //       `/products/search/${productSearch}/${searchFilterCategory}`,
    //     );
    //     setProducts(data.data);
    //   } else if (searchFilterCategory && !productSearch) {
    //     const { data } = await axiosReq.get(
    //       `/category/products/${searchFilterCategory}`,
    //     );
    //     setProducts(data.data);
    //   } else if (!searchFilterCategory && productSearch) {
    //     const { data } = await axiosReq.get(
    //       `/products/search/${productSearch}/${searchFilterCategory}`,
    //     );
    //     setProducts(data.data);
    //   } else {
    //     const { data } = await axiosReq.get(`/products`);
    //     setProducts(data.data);
    //   }
    // })();
    (async () => {
      if (servicesSearch) {
        const { data } = await axiosReq.get(
          `products/${productSearch}/${searchFilterCategory}`,
        );
        setProducts(data.data);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSearch, searchFilterCategory, servicesSearch]);

  useEffect(() => {
    (async () => {
      if (servicesSearch !== '') {
        const { data } = await axiosReq.get(
          `/services/search/${servicesSearch}`,
        );
        setServices(data.data);
      } else {
        const { data } = await axiosReq.get(`/services`);
        setServices(data.data);
      }
    })();
  }, [servicesSearch]);

  const dashboardValues = useMemo(
    () => ({
      // Begen Services Managment States

      checkedServices,
      setIsCheckedServices,
      servicesSearch,
      setServicesSearch,
      openAddService,
      setOpenAddService,
      services,
      setServices,
      openEditService,
      setOpenEditService,
      editIdService,
      setEditIdService,
      // End Services Managment States
      // Begen Products Managment States
      products,
      setProducts,
      checkedProducts,
      setIsCheckedProducts,
      searchFilterCategory,
      setSearchFilterCategory,
      productSearch,
      setProductSearch,
      openSideBar,
      setOpenSideBar,
      editIdProduct,
      setEditIdProduct,
      openEditProduct,
      setOpenEditProduct,
      // End Products Managment States
      // Begen Conferm Action Dialog
      openConfermAlert,
      setOpenConfermAlert,
      confermHandler,
      setConfermHandler,
      confermMessage,
      setConfermMessage,
      // End Conferm Action Dialog
      // Begen Contact Managment States
      contacts,
      setContacts,
      openShowContact,
      setOpenShowContact,
      slectedContact,
      setSlectedContact,
      // End Services Managment States
    }),
    [checkedServices, setIsCheckedServices, servicesSearch, openAddService, services, openEditService, editIdService, products, checkedProducts, setIsCheckedProducts, searchFilterCategory, productSearch, openSideBar, editIdProduct, openEditProduct, openConfermAlert, confermHandler, confermMessage, contacts, openShowContact, slectedContact],
  );
  return (
    <DashboardContext.Provider value={dashboardValues}>
      {children}
    </DashboardContext.Provider>
  );
};

ProvideDashboard.propTypes = {
  children: PropTypes.node.isRequired,
}

export { ProvideDashboard, DashboardContext };
