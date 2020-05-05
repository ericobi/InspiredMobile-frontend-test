import React, { useState } from 'react';
import { List, Input, Button } from 'antd';

import { DeleteFilled } from '@ant-design/icons';

const Dashboard = () => {
  const [users, setUsers] = useState<Array<string>>([]);
  const [randSelect, setRandSelect] = useState<string>('');

  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name) {
      const index = users.findIndex(n => n === name);
      if (index === -1) {
        const newList = [...users];
        newList.push(name);
        setUsers(newList);
      }
      setName('');
    }
  };

  const addUsersLayout = () => {
    return (
      <div className="flex-row">
        <Input
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
          value={name}
          placeholder="Input name"
          allowClear
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="primary" onClick={handleSubmit}>
          Add
        </Button>
      </div>
    );
  };

  const selectRandom = () => {
    if (users.length > 0) {
      let rand = Math.floor(Math.random() * Math.floor(users.length));
      let userName = users[rand];
      if (users.length > 1) {
        if (randSelect === userName)
          while (randSelect === userName) {
            rand = Math.floor(Math.random() * Math.floor(users.length));
            userName = users[rand];
            setRandSelect(userName);
          }
        else setRandSelect(userName);
      } else {
        setRandSelect(userName);
      }
    }
  };

  const footerLayout = () => {
    return (
      <Button type="ghost" onClick={() => selectRandom()}>
        Select Random
      </Button>
    );
  };

  const handleDelete = (index: any) => {
    const newList = [...users];
    newList.splice(index, 1);
    setUsers(newList);
  };

  return (
    <div>
      <h1>LIST OF NAMES</h1>
      <List
        header={addUsersLayout()}
        footer={footerLayout()}
        bordered
        dataSource={users}
        renderItem={(item, key) => (
          <List.Item
            actions={[
              <Button
                onClick={() => handleDelete(key)}
                type="primary"
                icon={<DeleteFilled />}
              />,
            ]}
          >
            <List.Item.Meta description={item} />
          </List.Item>
        )}
      />
      <h2 className="mt-5">Selected name : {randSelect}</h2>
    </div>
  );
};

export default Dashboard;
