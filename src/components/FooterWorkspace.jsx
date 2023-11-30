import React from 'react';
import { Button, Dropdown } from 'antd';

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" >
        3rd menu item
      </a>
    ),
  },
];

const App = () => (
  <div style={{ position: 'absolute', bottom: 0, right: 0 }}>
    <Dropdown overlay={{ items }} placement="topRight" arrow>
      <Button>bottomRight</Button>
    </Dropdown>
  </div>
);

export default App;
