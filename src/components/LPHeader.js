import React from 'react';
import {Row, Col, Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';

import LPAvatar from './LPAvatar';


const iconStyle = {
	width: "auto",
	height: "90px",
	marginTop: "-23px"	
}

class LPHeader extends React.Component {
	render () {
		return(
			<div style={{paddingTop: "12px", paddingBottom: "12px"}}>
				<Row>
					<Col span={6}>
						<img src='image/hsbc_icon.png' style={iconStyle}/>
					</Col>
					<Col span={12}>
						<Menu mode="horizontal" theme="dark">
							<Menu.Item key="calendar">
								<Link to="/calendar">
									<Icon type="calendar" style={{fontSize: 16}}/>Calendar
								</Link>
							</Menu.Item>							
							<Menu.Item key="team">
								<Link to="/colleague">
									<Icon type="team" style={{fontSize: 16}}/>Teammates
								</Link>
							</Menu.Item>
						</Menu>
					</Col>
					<Col span={6}>
						<LPAvatar />
					</Col>
				</Row>
			</div>
		);
	}
}

export default LPHeader;