import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'Name',
  },
  {
    title: 'Modified',
    dataIndex: 'Modified',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: 'Owner',
    dataIndex: 'Owner',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: 'Activity',
    dataIndex: 'Activity',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    Name: 'Environment one',
    Modified: 98,
    Owner: 60,
    Activity: 70,
  },
  {
    key: '2',
    Name: 'Environment two',
    Modified: 98,
    Owner: 66,
    Activity: 89,
  },
  {
    key: '3',
    Name: 'Environment four',
    Modified: 98,
    Owner: 90,
    Activity: 70,
  },
  {
    key: '4',
    Name: 'Jim Red',
    Modified: 88,
    Owner: 99,
    Activity: 89,
  },
];
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};
const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;
export default App;