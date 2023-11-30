import React, { useState } from 'react';
import { FaPlus, FaFilter } from 'react-icons/fa6';
import { AiOutlineAppstore, AiOutlineUnorderedList } from 'react-icons/ai';
import { Tabs, Card, Button, Row } from 'antd';
import ListView from './ListView';
import CardView from './CardView'; // Assuming you have CardView component

const { TabPane } = Tabs;

const App = () => {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'card'

  const onChange = (key) => {
    console.log(key);
  };

  const toggleView = (view) => {
    setActiveView(view);
  };

  const items = [
    {
      key: '1',
      label: 'All',
      children: activeView === 'list' ? <ListView /> : <CardView label="All" />,
    },
    {
      key: '2',
      label: 'Recently Opened',
      children: activeView === 'list' ? <ListView /> : <CardView label="Recently Opened" />,
    },
    {
      key: '3',
      label: 'Shared',
      children: activeView === 'list' ? <ListView /> : <CardView label="Shared" />,
    },
    {
      key: '4',
      label: 'Favorites',
      children: activeView === 'list' ? <ListView /> : <CardView label="Favorites" />,
    },
    {
      key: '5',
      label: <FaPlus />,
      children: <CardView label="Add New" />,
    },
  ];

  return (
    <Tabs
      defaultActiveKey="1"
      onChange={onChange}
      tabBarExtraContent={
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button size="small" style={{ marginRight: '8px' }}>
            <FaFilter />
          </Button>
          <Button
            size="small"
            style={{ marginRight: '8px' }}
            onClick={() => toggleView('card')}
          >
            <AiOutlineAppstore />
          </Button>
          <Button size="small" onClick={() => toggleView('list')}>
            <AiOutlineUnorderedList />
          </Button>
        </div>
      }
    >
      {items.map((item) => (
        <TabPane tab={item.label} key={item.key}>
          {item.children}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default App;
