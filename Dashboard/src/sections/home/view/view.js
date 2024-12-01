import { useCallback, useContext, useEffect, useState } from 'react';
// @mui
import { Card, Table, TableBody, TableContainer, Container } from '@mui/material';
// src
import { useSettingsContext } from 'src/components/settings';
import { useTable } from 'src/components/table';
import { _orders } from 'src/_mock/_order';
import { useBoolean } from 'src/hooks/use-boolean';
import Scrollbar from 'src/components/scrollbar/scrollbar';
import { applyFilter } from 'src/layouts/_common/searchbar/utils';
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import ShowingFiltersResult from 'src/components/ShowingFiltersResult';
import { FiltersContext } from 'src/context/filtersContext';
import TableHeadCustom from '../table-head-custom';
import { emptyRows, getComparator } from '../utils';
import OrderTableRow from '../order-table-row';
import TableEmptyRows from '../table-empty-rows';
import TableNoData from '../table-no-data';
import Filters from '../Filters';
import TablePaginationCustom from '../TablePaginationCustom';
import { axiosReq } from 'src/utils/axiosReq';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'email', label: 'Email', width: '50%', isNavMiniWidth: '50%' },
  { id: 'createdAt', label: 'Created At', width: '35%', isNavMiniWidth: '35%' },
  { id: 'actions', label: 'Actions', width: '15%', isNavMiniWidth: '15%' },

];


export default function HomeView() {
  const table = useTable({ defaultOrderBy: 'orderNumber' });
  const settings = useSettingsContext();
  const {filters,
    setFilters,
    handleResetDateRange,
    handleCloseRevenueDialog,
    handleCloseSortBy
  } = useContext(FiltersContext);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

const getClients = async () => {
  const {data} = await axiosReq.get('/user/clients')
  setTableData(data?.clients);

}

useEffect(() => {
  getClients()
}, [])
  const router = useRouter();

  // const confirm = useBoolean();
  const openDateRange = useBoolean();
  const openRevenueDialog = useBoolean();
  const openSortByDialog = useBoolean();
  const openCreateDialog = useBoolean();


  const dateError =
  filters.startDate && filters.endDate
    ? filters.startDate.getTime() > filters.endDate.getTime()
    : false;

  const dataFiltered = applyFilter({
    inputData: tableData,
    comparator: getComparator,
    filters,
    dateError,
  });

  const handleFilters = useCallback(
    (name, value) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setFilters, table]
  );


const canReset =
  !!filters.email || filters.status !== 'all' || (!!filters.startDate && !!filters.endDate);


  const denseHeight = table.dense ? 52 : 72;

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleDeleteRow = useCallback(
    async(id) => {
      try {
        setIsLoading(true)
        await tableData.forEach(async(row) => {
          if(row.id === id) {
            await axiosReq.get(`/user/delete-client/${row._id}`)
            toast.success('Deleted Successfully')
          }
        });
        const deletedRow = tableData.filter((row) => row.id !== id);
        setTableData(deletedRow);
        table.onUpdatePageDeleteRow(dataFiltered.length);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.warn(error.message)
        toast.error(error.message)
      }

    },
    [dataFiltered.length, table, tableData]
  );

  // const handleViewRow = useCallback(
  //   (id) => {
  //     router.push(paths.dashboard.details(id));
  //   },
  //   [router]
  // );


  const handleOnCloseDateRange = useCallback((type) => {
    openDateRange.onFalse();
    if (type !== 'continue') {
      handleResetDateRange();
    }
  }, [handleResetDateRange, openDateRange]);
  
  const handleCloseRevenue = useCallback((type) => {
    openRevenueDialog.onFalse();
    if (type !== 'continue') {
      handleCloseRevenueDialog();
    }
  }, [handleCloseRevenueDialog, openRevenueDialog]
  );

  const handleCloseSortByDialog = useCallback((type) => {
    openSortByDialog.onFalse();
    if (type !== 'continue') {
      handleCloseSortBy();
    }
  }, [handleCloseSortBy, openSortByDialog])
  
  return (
    <Container
      maxWidth={settings.themeStretch ? false : 'xl'}
      sx={{
        '& .MuiPaper-root.MuiPaper-elevation': {
          border: '1px solid #D6D8E1'
        }
      }}
    >
      <Card sx={{ m: '0 -1em' }}>
        <Filters
          openDateRange={openDateRange.value}
          onCloseDateRange={handleOnCloseDateRange}
          onOpenDateRange={openDateRange.onTrue}
          openSortByDialog={openSortByDialog.value}
          onOpenSortByDialog={openSortByDialog.onTrue}
          onCloseSortByDialog={handleCloseSortByDialog}
          filters={filters}
          onFilters={handleFilters}
          dateError={dateError}
          onContinueDateDialog={openDateRange.onFalse}
        />
          <ShowingFiltersResult
            handleOnCloseDateRange={handleOnCloseDateRange}
            handleOnCloseRevenue={handleCloseRevenue}
          />
          <TableContainer
            sx={{
              position: 'relative',
              overflow: 'unset',
              m: ' 0 25px',
              maxWidth: 'calc(100% - 50px)',
            }}
          >
            <Scrollbar>
              <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 960 }}>
                <TableHeadCustom
                  order={table.order}
                  orderBy={table.orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={tableData.length}
                  numSelected={table.selected.length}
                />

                <TableBody>
                  {!table.dense ? 
                    dataFiltered
                    .slice(
                      table.page * table.rowsPerPage,
                      table.page * table.rowsPerPage + table.rowsPerPage
                    )
                      .map((row) => (
                        <OrderTableRow
                          key={row.id}
                          row={row}
                          selected={table.selected.includes(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          isLoading={isLoading}
                        />
                      )) :
                      dataFiltered
                      .map((row) => (
                        <OrderTableRow
                          key={row.id}
                          row={row}
                          selected={table.selected.includes(row.id)}
                          onDeleteRow={() => handleDeleteRow(row.id)}
                          // onViewRow={() => handleViewRow(row.id)}
                        />
                      ))
                  }

                  <TableEmptyRows
                    height={denseHeight}
                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                  />

                  <TableNoData notFound={notFound} />
                </TableBody>
              </Table>
            </Scrollbar>
          </TableContainer>
          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            //
            dense={table.dense}
            onChangeDense={table.onChangeDense}
          />
        </Card>
    </Container>
  );
}
