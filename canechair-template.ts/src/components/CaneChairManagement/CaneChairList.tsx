import * as React from 'react';
import { CaneChairModel } from 'types/modelTypes/CaneChairModel';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { Link } from 'react-router-dom';

const CaneChairList = (props: CaneChairListProps) => {
  const columns = [
    {
      Header: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      accessor: 'CaneChairName',
      Cell: (d: any) => <span className="CaneChairName">{d.value}</span>
    },
    {
      Header: '',
      id: 'btn_details',
      Cell: (d: any) => <Link to={`/CaneChair/${d.original.id}`} className="btn btn-outline-success btn-sm mx-1" > Details</Link>,
      filterable: false,
      maxWidth: 75
    },
    {
      Header: '',
      id: 'btn_delete',
      Cell: (d: any) => <input type="button" className="btn btn-outline-danger btn-sm mx-1" onClick={() => { props.onCaneChairDelete(d.original); }} value="Delete" />,
      filterable: false,
      maxWidth: 75
    }
  ];

  return (

    <div>
      {/* List of CaneChairs */}
      <ReactTable
        data={props.CaneChairArray}
        columns={columns}
        defaultPageSize={10}
        minRows={3}
        filterable
        defaultFilterMethod={(filter, row) => String(row[filter.id]).includes(filter.value)}
      />
    </div>
  );
};

type CaneChairListProps = {
  CaneChairArray: CaneChairModel[];
  onCaneChairDelete: (CaneChair: CaneChairModel) => void;
};

export default CaneChairList;
