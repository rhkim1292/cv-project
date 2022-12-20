import { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Education />
			</div>
		);
	}
}

export default App;
