import React, { useState } from 'react';
import { Card, Dropdown, Menu } from 'antd';
import { EllipsisOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const { Item } = Menu;

const App = () => {
  const items = [
    {
      key: '1',
      label: 'Option 1',
    },
    {
      key: '2',
      label: 'Option 2',
    },
    {
      key: '3',
      label: 'Option 3',
    },
  ];

  const cardDropdownMenu = (
    <Menu>
      {items.map((item) => (
        <Item key={item.key}>{item.label}</Item>
      ))}
    </Menu>
  );

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  return (
    <div className="cards-container" style={{ display: 'flex', gap: '10px', padding: '0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <LeftOutlined style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handlePrevCard} />
      </div>

      <Card
        title={`Card ${currentCardIndex + 1}`}
        bordered={true}
        extra={
          <Dropdown
            overlay={cardDropdownMenu}
            placement="bottomRight"
            trigger={['click']}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Dropdown>
        }
        style={{
          width: 300, borderRadius: '10px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)'
        }}
        cover={
          <img
            alt=""
            src=""
          />
        }
    
      >
       
        <p>Card content</p>
        <p>Planner vs Actual</p>
      </Card>
      
      <Card
        title={`Card ${currentCardIndex + 1}`}
        bordered={true}
        extra={
          <Dropdown
            overlay={cardDropdownMenu}
            placement="bottomRight"
            trigger={['click']}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Dropdown>
        }
        style={{
          width: 300, borderRadius: '10px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)'
        }}
        cover={
          <img
            alt=""
            src=""
          />
        }
        >
       <p>Card content</p>
        <p>Planner vs Actual</p>
      </Card>
      <Card
        title={`Card ${currentCardIndex + 1}`}
        bordered={true}
        extra={
          <Dropdown
            overlay={cardDropdownMenu}
            placement="bottomRight"
            trigger={['click']}
            getPopupContainer={(triggerNode) => triggerNode.parentNode}
          >
            <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
          </Dropdown>
        }
        style={{
          width: 300, borderRadius: '10px', boxShadow: '0 0 10px 0 rgba(0,0,0,0.2)'
        }}
        cover={
          <img
            alt=""
            src=""
          />
        }
    
      >
       
        <p>Card content</p>
        <p>Planner vs Actual</p>
       </Card>
       <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
          <RightOutlined style={{ fontSize: '24px', cursor: 'pointer' }} onClick={handleNextCard} />
       </div>
       </div>
  );
};

export default App;


// ... other imports
// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';

// export default function MediaControlCard() {
//   const theme = useTheme();

//   return (
//     <Card sx={{ display: 'flex' }}>
//       <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//         <CardContent sx={{ flex: '1 0 auto' }}>
//           <Typography component="div" variant="h5">
//             Live From Space
//           </Typography>
//           <Typography variant="subtitle1" color="text.secondary" component="div">
//             Mac Miller
//           </Typography>
//         </CardContent>
//         <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
//         <p>hi how are you amazing yayy</p>
          {/* <IconButton aria-label="previous">
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 38, width: 38 }} />
          </IconButton>
          <IconButton aria-label="next">
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton> */}
        {/* </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="h5">
          Live From Space
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          Mac Miller
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
      <p>hi how are you amazing yayy</p> */}
        {/* <IconButton aria-label="previous">
          {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
        </IconButton>
        <IconButton aria-label="play/pause">
          <PlayArrowIcon sx={{ height: 38, width: 38 }} />
        </IconButton>
        <IconButton aria-label="next">
          {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
        </IconButton> */}
      {/* </Box>
    </Box> */}
      
      {/* ... other components */}
//     </Card>
//   );
// }


