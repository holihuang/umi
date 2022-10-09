import { Outlet, history, useLocation } from 'umi';
import React, { useEffect, useState } from 'react';
import { MailOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './index.less'

export default function HomePage() {
    const [current, setCurrent] = useState<string>('home')
    const location = useLocation();
    useEffect(() => {
        const { pathname } = location
        setCurrent(pathname.split('/')[pathname.split('/').length - 1])
    }, [])
    type MenuItem = Required<MenuProps>['items'][number];
    function getItem(
        label: React.ReactNode,
        key: React.Key,
        icon?: React.ReactNode,
        children?: MenuItem[],
        type?: 'group',
    ): MenuItem {
        return {
            key,
            icon,
            children,
            label,
            type,
        } as MenuItem
    }
    const items: MenuProps['items'] = [
        getItem('home', 'home', <MailOutlined />, [
            getItem('Item 1', 'g1', null,
                [
                    getItem('Option a', 'a', null, [
                        getItem('Option C', 'c', null, [
                            getItem('Option D', 'd', null, [
                                getItem('Option E', 'e')
                            ]),
                        ])
                    ]),
                    getItem('Option b', 'b')
                ],
                'group'),
        ])
    ]
    function handleMenu(obj: { keyPath: string[], key: string }) {
        const arr: string[] = [...obj.keyPath];
        history.push(`/${arr.reverse().join('/')}`);
        setCurrent(obj.key)
    }
  return (
      <div className={styles.wrapper}>
          <div className={styles.menu}>
              <Menu
                  onClick={handleMenu}
                    theme='dark'
                  mode="inline"
                  selectedKeys={[current]}
                    items={items}
                />
            </div>
            <div className={styles.content}>
                <Outlet />
            </div>
    </div>
  );
}
