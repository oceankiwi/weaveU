import React from 'react';
import {Row, Col, Calendar} from 'antd';

import LPSider from './LPSider';

class LPContent extends React.Component {
	render() {
		return(
			<div style={{backgroundColor:"white"}}>
				<Row>
					<Col span={6}>
						<LPSider/>
					</Col>
					<Col span={18}>
						<div style={{padding:"12px"}}>
							<Calendar/>
						</div>
					</Col>
				</Row>
			</div>
		);
	}
}

export default LPContent;