import React from 'react';
import {Avatar, Icon} from 'antd';


class LPAvatar extends React.Component {
	render () {
		return(
			<div style={{height:"auto", width:"52px", float:"right"}}>
				<Avatar icon="user" size={'large'}/>
				<Icon type="setting" style={{color: '#FFF'}}/>
			</div>
		);
	}
}

export default LPAvatar;