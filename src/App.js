import { Component } from 'react';
import Header from './components/Header';
import Education from './components/Education';
import './styles/App.css';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="cv-body">
					<Education />
				</div>
			</div>
		);
	}
}

export default App;
