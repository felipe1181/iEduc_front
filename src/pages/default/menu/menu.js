import React, { useState } from 'react';
import { Menu } from 'antd'; 
import './menu.css';

const { SubMenu } = Menu;

function MenuiEduc() {
    const [currentKey, setCurrentKey] = useState('setting:1');


    const handleClick = e => {
        console.log('click ', e);
        setCurrentKey(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[currentKey]} mode="horizontal">
            <SubMenu
                className="menu-main"
                title={
                    <>
                        <img width={40} src="https://avatars2.githubusercontent.com/u/31036996?s=400&u=751da4fec3bc66308d021c045cfc3d3ac1348c38&v=4" alt="profile" />
                    </>
                }
            >
                <Menu.ItemGroup className="content-submenu" title="Item 1">
                    <Menu.Item key="setting:1">Option 1</Menu.Item>
                    <Menu.Item key="setting:2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup className="content-submenu" title="Item 2">
                    <Menu.Item key="setting:3">Option 3</Menu.Item>
                    <Menu.Item key="setting:4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default MenuiEduc;
