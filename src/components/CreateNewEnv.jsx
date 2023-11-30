import React, { useState } from 'react';
import { PlusCircleOutlined, ArrowRightOutlined, DeleteOutlined, ImportOutlined } from '@ant-design/icons';
import { Modal, Input, Select, Button, Upload, message } from 'antd';
import ImgCrop from 'antd-img-crop';

const { Option } = Select;

const IconLine = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [fileList, setFileList] = useState([]);
  const [reference, setReference] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Category:', category);
    console.log('File List:', fileList);
    console.log('Reference:', reference);

    setTitle('');
    setDescription('');
    setCategory('');
    setFileList([]);
    setReference('');
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setFileList([]);
    setReference('');
    setIsModalVisible(false);
  };

  const handleCreate = () => {
    showModal();
  };

  const handleStartWithReference = () => {
    console.log('Start with reference icon clicked');
  };

  const handleDelete = () => {
    console.log('Delete icon clicked');
  };

  const handleImport = () => {
    console.log('Import icon clicked');
  };

  const onChange = ({ fileList: newFileList, file }) => {
    // Limit to only one file
    const limitedFileList = newFileList.slice(-1);

    // If the file is successfully uploaded, disable further uploads
    if (file.status === 'done') {
      message.success(`${file.name} file uploaded successfully`);
      setFileList(limitedFileList);
    } else {
      setFileList(newFileList);
    }
  };

  const onPreview = async (file) => {
    // Handle image preview logic if needed
    console.log('Preview:', file);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Create</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <button
          style={{ height: '60px', width: '60px', background: 'none', border: 'none', margin: '0 20px' }}
          onClick={handleCreate}
        >
          <PlusCircleOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
          <h4 style={{ margin: 0 }}>New </h4>
        </button>
        <button
          style={{ height: '60px', width: '60px', background: 'none', border: 'none', margin: '0 20px' }}
          onClick={handleStartWithReference}
        >
          <ArrowRightOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
          <h4 style={{ margin: 0 }}>Reference</h4>
        </button>
        <button
          style={{ height: '60px', width: '60px', background: 'none', border: 'none', margin: '0 20px' }}
          onClick={handleDelete}
        >
          <DeleteOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
          <h4 style={{ margin: 0 }}>Trash</h4>
        </button>
        <button
          style={{ height: '60px', width: '60px', background: 'none', border: 'none', margin: '0 20px' }}
          onClick={handleImport}
        >
          <ImportOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
          <h4 style={{ margin: 0 }}>Import</h4>
        </button>
      </div>

      <Modal
        title="Add New"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk} disabled={!title || !description || !category}>
            Submit
          </Button>,
        ]}
      >
        <Input
          addonBefore={<div style={{ fontWeight: 'bold' }}></div>}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: '10px' }}
          required
        />
        <Input.TextArea
  addonBefore={<div style={{ fontWeight: 'bold' }}>Description</div>}
  placeholder="Description"
  value={description}
  onChange={(e) => setDescription(e.target.value)}
  style={{ marginBottom: '10px' }}
  required
/>

        <Select
          mode="tags"
          labelInValue
          placeholder="Select or add tags"
          value={category}
          onChange={(values) => setCategory(values)}
          style={{ width: '100%', marginBottom: '10px' }}
          required
        />
        <ImgCrop rotate>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
            disabled={fileList.length >= 1} // Disable upload button if there is already one file uploaded
          >
            {fileList.length < 1 && (
              <div>
                <PlusCircleOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            )}
          </Upload>
        </ImgCrop>
        <a
          style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}
        >
          Add Reference
        </a>
      </Modal>
    </div>
  );
};

export default IconLine;
