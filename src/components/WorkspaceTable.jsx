import React, { useEffect, useState } from 'react';
import { Button, Table, Empty } from 'antd';

const WorkspaceTable = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  const columns = [
    {
      title: (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Workspace</span>
          <Button onClick={() => console.log('Create new workspace')}>+ Create New Workspace</Button>
        </div>
      ),
      dataIndex: 'name.last',
      key: 'name',
      width: '30%',
    },
  ];

  return (
    <Table
      columns={columns}
      // dataSource={data}
      pagination={false}
      scroll={{ y: 400 }}
      style={{ width: 'calc(100% - 16px)', borderCollapse: 'collapse', overflow: 'hidden',marginBottom: '20px' }}
      bordered={false}
      locale={{
        emptyText: (
          <Empty description="No workspaces found" image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ),
      }}
    />
  );
};

export default WorkspaceTable;
