exports.List_tsx = `
import * as React from 'react';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { ___ComponentName___Model } from 'Types/ModelTypes/___ComponentName___Model';

const ___ComponentName___List = (props: ___ComponentName___ListProps) => {
  console.log(\`props: \`, props);
  const columns = [
    {
      Header: 'Id',
      accessor: 'id'
    },
    {
      Cell: (d: any) => <span className="___ComponentName___Name">{d.value}</span>,
      Header: 'Name',
      accessor: '___ComponentName___Name'
    },
    {
      Cell: (d: any) => (
        <Link
          to={\`/ Sample / ___ComponentName___ / $\{ d.original.id } \`}
          className="btn btn-outline-success btn-sm mx-1"
        >
          {' '}
          Details
        </Link>
      ),
      Header: '',
      filterable: false,
      id: 'btn_details',
      maxWidth: 75
    },
    {
      Cell: (d: any) => (
        <input
          type="button"
          className="btn btn-outline-danger btn-sm mx-1"
          onClick={() => {
            props.on___ComponentName___Delete(d.original);
          }}
          value="Delete"
        />
      ),
      Header: '',
      filterable: false,
      id: 'btn_delete',
      maxWidth: 75
    }
  ];

  return (
    <div>
      {/* List of ___ComponentName___s */}
      {console.log(\`props.___ComponentName___Array:\`, props)}
      <ReactTable
        data={props.___ComponentName___Array ? props.___ComponentName___Array : undefined}
        columns={columns}
        defaultPageSize={10}
        minRows={3}
        filterable
        defaultFilterMethod={(filter, row) =>
          String(row[filter.id]).includes(filter.value)
        }
      />
    </div>
  );
};

interface ___ComponentName___ListProps {
  ___ComponentName___Array: ___ComponentName___Model[];
  on___ComponentName___Delete: (___ComponentName___: ___ComponentName___Model) => void;
}

export default ___ComponentName___List;
`;
