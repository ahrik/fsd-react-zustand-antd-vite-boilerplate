import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import { useSessionStore } from '@entities/session';
import { ProfileTheme } from './profile-theme/ProfileTheme';

export const Profile = () => {
  const [open, setOpen] = useState(false);
  const currentSession = useSessionStore(state => state.currentSession);
  const drawerTitle = `${currentSession?.name || 'Admin'} [${currentSession?.role}]`;

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleButtonClick} shape="circle" icon={<UserOutlined />} />

      <Drawer title={drawerTitle} onClose={handleDrawerClose} open={open}>
        <ProfileTheme />
      </Drawer>
    </>
  );
};
