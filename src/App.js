import { Component } from 'react';
import Header from './components/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'YOUR NAME',
			title: 'Your Title',
			phone: '(123) 456-7890',
			email: 'your@email.com',
			links: [],
		};
	}

	render() {
		const { name, title, phone, email, links } = this.state;
		return (
			<Header
				name={name}
				title={title}
				phone={phone}
				email={email}
				links={links}
			/>
		);
	}
}

export default App;
