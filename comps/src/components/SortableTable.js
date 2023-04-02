import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from "../hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sort, sortBy, sortOrder, sortedData } = useSort(data, config);

  const updatedConfig = config.map(column => {
    if(!column.sortValue) return column;

    return {
    ...column,
      header: () => (
        <th onClick={() => sort(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th> 
      )
    }
  });

  return (
    <div>
      <Table {...props} config={updatedConfig} data={sortedData} />
    </div>
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}


export default SortableTable;

