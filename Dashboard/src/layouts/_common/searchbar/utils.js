// utils
import { format } from 'date-fns';
import { flattenArray } from 'src/utils/flatten-array';
import { fDate, fTimestamp } from 'src/utils/format-time';

// ----------------------------------------------------------------------




export function getAllItems({ data }) {
  const reduceItems = data.map((list) => handleLoop(list.items, list.subheader)).flat();

  const items = flattenArray(reduceItems).map((option) => {
    const group = splitPath(reduceItems, option.path);

    return {
      group: group && group.length > 1 ? group[0] : option.subheader,
      title: option.title,
      path: option.path,
    };
  });

  return items;
}

// ----------------------------------------------------------------------


export function applyFilter({ inputData, comparator, filters, dateError }) {


  const stabilizedThis = inputData.map((el, index) => [el, index]);

  inputData = stabilizedThis.map((el) => el[0]);

  if (filters?.email) {
    inputData = inputData.filter(
      (order) =>
        order.user.email.toLowerCase().includes(filters?.email.toLowerCase())
    );
  }

  if (filters?.SortBy)  {
    if (filters?.SortBy === 'Latest created') {
      inputData = inputData.reverse();
    } else if (filters?.SortBy === 'Earlier created') {
      inputData = inputData.sort((a, b) => comparator(a.createdAt, b.createdAt));
    }
  }


  if(filters?.Time && filters.Time !== 'Custom' && !dateError) {
    if (filters?.Time === 'Today') {
      inputData = inputData.filter(
        (order) =>
        fDate(order.createdAt) === fDate(new Date())
      );
    } else if (filters?.Time === 'Last 7 days') {
      inputData = inputData.filter(
        (order) =>
        fDate(order.createdAt) >= (fDate(new Date() - 7 * 24 * 60 * 60 * 1000))
      );
    } else if (filters?.Time === 'Last 30 days') {
        inputData = inputData.filter(
        (order) =>
          (format(order.createdAt, 'yyyy-MM-dd')) >= (format((new Date() - 30 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd')))
        
    }
  }

  if (!dateError) {
    if (filters?.startDate && filters?.endDate) {
      inputData = inputData.filter(
        (order) =>
          fTimestamp(order.createdAt) >= fTimestamp(filters?.startDate) &&
          fTimestamp(order.createdAt) <= fTimestamp(filters?.endDate)
      );
    }
  }

  return inputData;
}

// ----------------------------------------------------------------------

export function splitPath(array, key) {
  let stack = array.map((item) => ({
    path: [item.title],
    currItem: item,
  }));

  while (stack.length) {
    const { path, currItem } = stack.pop();

    if (currItem.path === key) {
      return path;
    }

    if (currItem.children?.length) {
      stack = stack.concat(
        currItem.children.map((item) => ({
          path: path.concat(item.title),
          currItem: item,
        }))
      );
    }
  }
  return null;
}

// ----------------------------------------------------------------------

export function handleLoop(array, subheader) {
  return array?.map((list) => ({
    subheader,
    ...list,
    ...(list.children && {
      children: handleLoop(list.children, subheader),
    }),
  }));
}

// ----------------------------------------------------------------------

export function groupedData(array) {
  const group = array.reduce((groups, item) => {
    groups[item.group] = groups[item.group] || [];

    groups[item.group].push(item);

    return groups;
  }, {});

  return group;
}
