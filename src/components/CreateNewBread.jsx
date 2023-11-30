import React, { useState, useEffect } from 'react';
import { Breadcrumb, Dropdown, Menu, Tooltip, Drawer, Empty, Input, Button } from 'antd';
import {
  EllipsisOutlined,
  ShareAltOutlined,
  ClockCircleOutlined,
  CommentOutlined,
} from '@ant-design/icons';
import {
  EditOutlined,
  DeleteOutlined,
  CopyOutlined,
  UndoOutlined,
  ImportOutlined,
  SendOutlined,
  HistoryOutlined,
} from '@ant-design/icons';
import moment from 'moment';

const CreateNewBread = () => {
  const [lastEdited, setLastEdited] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [drawerContent, setDrawerContent] = useState(null);
  const [shareInputValue, setShareInputValue] = useState('');

  useEffect(() => {
    // Simulating a timestamp for demonstration purposes
    const lastEditedTimestamp = Date.now() - 3 * 60 * 60 * 1000; // 3 hours ago
    const formattedLastEdited = moment(lastEditedTimestamp).fromNow();

    setLastEdited(`Last Edited: ${formattedLastEdited}`);
  }, []); // Empty dependency array to run the effect only once on mount

  const shareMenu = (
    <Menu>
      <Menu.Item key="input">
        <Input
          placeholder="Enter email"
          value={shareInputValue}
          onChange={(e) => setShareInputValue(e.target.value)}
          style={{ width: 160, marginBottom: '8px' }}
        />
      </Menu.Item>
      <Menu.Item key="invite">
        <Button type="primary" onClick={() => showDrawer('Invite')}>
          Invite
        </Button>
      </Menu.Item>
    </Menu>
  );

  const menu = (
    <Menu style={{ width: 160 }}>
      <Menu.Item key="edit" icon={<EditOutlined />}>
        Edit
      </Menu.Item>
      <Menu.Item key="delete" icon={<DeleteOutlined />}>
        Delete
      </Menu.Item>
      <Menu.Item key="copy" icon={<CopyOutlined />}>
        Copy
      </Menu.Item>
      <Menu.Item key="undo" icon={<UndoOutlined />}>
        Undo
      </Menu.Item>
      <Menu.Item key="duplicate" icon={<CopyOutlined />}>
        Duplicate
      </Menu.Item>
      <Menu.Item key="import" icon={<ImportOutlined />}>
        Import
      </Menu.Item>
      <Menu.Item key="pageHistory" icon={<HistoryOutlined />}>
        Page history
      </Menu.Item>
      <Menu.Item key="openInSidePeek" icon={<CopyOutlined />}>
        Open in side peek
      </Menu.Item>
      <Menu.Item key="moveTo" icon={<SendOutlined />}>
        Move to
      </Menu.Item>
    </Menu>
  );

  const showDrawer = (content) => {
    if (content === 'Share') {
      setDrawerContent(shareMenu);
    } else if (content === 'Empty') {
      setDrawerContent(
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 60,
          }}
          description={<span>Customize <a href="#API">Description</a></span>}
        >
          <Button type="primary">Create Now</Button>
        </Empty>
      );
    } else if (content === 'Comments') {
      setDrawerContent(
        <div>
          {/* Your content for Comments */}
          <p>Comments content.</p>
        </div>
      );
    } else if (content === 'Updates') {
      setDrawerContent(
        <div>
          {/* Your content for Updates */}
          <p>Updates content.</p>
        </div>
      );
    } else if (content === 'Invite') {
      // Your logic for handling the "Invite" button click
      console.log('Inviting...');
    }
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
    setShareInputValue(''); 
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="#">Explore</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="#">Confer</a>
        </Breadcrumb.Item>
      </Breadcrumb>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Dropdown overlay={shareMenu} placement="bottomRight" arrow>
          <ShareAltOutlined style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer' }} />
        </Dropdown>
        <ClockCircleOutlined
          style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer' }}
          onClick={() => showDrawer('Updates')}
        />
        <CommentOutlined
          style={{ fontSize: '24px', marginRight: '20px', cursor: 'pointer' }}
          onClick={() => showDrawer('Comments')}
        />
        {lastEdited && (
          <Tooltip title={lastEdited}>
            <span style={{ marginRight: '20px', cursor: 'pointer', color: '#1890ff' }}>Last Edited</span>
          </Tooltip>
        )}
        <Dropdown overlay={menu} placement="bottomRight" arrow>
          <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
        </Dropdown>
      </div>

      <Drawer
        title=""
        placement="right"
        closable={true}
        onClose={onCloseDrawer}
        visible={drawerVisible}
        width={300}
      >
        <div style={{ padding: '16px' }}>{drawerContent}</div>
      </Drawer>
    </div>
  );
};

export default CreateNewBread;
