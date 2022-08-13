import React, { useRef, useEffect, useState } from 'react';
import { Button, Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import axios from "axios";

import './index.less'

declare var window: any; // ggb全局对象




const Home: React.FC = (props, ref) => {

	const [appName, setAppName] = useState('graphing');
	





	useEffect(() => {
		
		
	}, [])

	


	const onClick = ({ key }) => {
		message.info(`Click on item ${key}`);
	};

	const menu = (
		<Menu onClick={onClick}>
			<Menu.Item key="1">vite</Menu.Item>
			<Menu.Item key="2">react</Menu.Item>
			<Menu.Item key="3">css</Menu.Item>
			<Menu.Item key="4">vue</Menu.Item>
			<Menu.Item key="5">555</Menu.Item>
			<Menu.Item key="6">555</Menu.Item>
			<Menu.Item key="7">555</Menu.Item>
			<Menu.Item key="7">555</Menu.Item>
		</Menu>
	);

	// 保存
	const submit = async () => {
		
	}

	// 


	return (
		<div>
			<Dropdown overlay={menu}>
				<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					{appName} <DownOutlined />
				</a>
			</Dropdown>
			<Button type='primary' onClick={submit}>submit</Button>
		</div>
	);
}
export default Home;