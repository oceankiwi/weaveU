import React from 'react';
import ReactDOM from 'react-dom';

import 'antd/dist/antd.css';
import { Layout} from 'antd';

import LPHeader from './components/LPHeader';
//import LPContent from './components/LPContent';


const { Header, Footer, Sider, Content } = Layout;

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
				<Header>
					<LPHeader/>
				</Header>
				<Layout>
					<Content>
						{this.props.children}
					</Content>
				</Layout>
				<Footer>Footer</Footer>
	    	</Layout>
		);
	}

}

export default App;