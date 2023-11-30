import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa6';
import { Tabs, Card, Button, Row, Col } from 'antd';
import { BsListUl, BsCardText } from 'react-icons/bs';
import Allqa from './Allqa';

const { TabPane } = Tabs;

const App = () => {
  const [view, setView] = useState(false);

  const toggleHandler = (e) => {
    e.preventDefault();
    setView(true);
  };

  const toggleHandler1 = (e) => {
    e.preventDefault();
    setView(false);
  };

  const onChange = (key) => {
    console.log(key);
  };

  const CardView = ({ label }) => (
    <Card title={label} style={{ width: 300, margin: '16px' }}>
      <p>Card content for {label}</p>
    </Card>
  );

  const items = [
    {
      key: '1',
      label: 'All',
      children: <Allqa />,
    },
    {
      key: '2',
      label: 'Recently Opened',
      children: <CardView label="Recently Opened" />,
    },
    {
      key: '3',
      label: 'Shared',
      children: <CardView label="Shared" />,
    },
    {
      key: '4',
      label: 'Favorites',
      children: <CardView label="Favorites" />,
    },
    {
      key: '5',
      label: <FaPlus />,
      children: <CardView label="Add New" />,
    },
  ];

  return (
    <Tabs defaultActiveKey="1" onChange={onChange}>
      {items.map((item) => (
        <TabPane
          tab={
            <div
              style={{
                display: 'flex',
                justifyContent: item.key === '1' ? 'space-between' : 'flex-start',
                alignItems: 'center',
              }}
            >
              {item.key === '1' ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'left' }}>
                  <Button
                    size="100%"
                    style={{ backgroundColor: '#DCE5EC', marginRight: '8px' }}
                    onClick={toggleHandler1}
                  >
                    <BsListUl />
                  </Button>
                  <Button
                    size="100%"
                    style={{ backgroundColor: '#DCE5EC' }}
                    onClick={toggleHandler}
                  >
                    <BsCardText />
                  </Button>
                </div>
              ) : (
                <span>{item.label}</span>
              )}
            </div>
          }
          key={item.key}
        >
          <Row gutter={16}>
            <Col span={8}>
              {item.children}
            </Col>
          </Row>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default App;
