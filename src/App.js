import { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Education />
				<Experience />
			</div>
		);
	}
}

export default App;
