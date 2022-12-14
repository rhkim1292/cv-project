import { Component } from 'react';
import Header from './components/Header';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'RANDY KIM',
			title: 'Software Engineer',
			phone: '(213) 713-2208',
			email: 'rhkim1292@gmail.com',
			links: [
				{
					type: 'github',
					link: 'github.com/rhkim1292',
				},
				{
					type: 'linkedin',
					link: 'linkedin.com/in/randy-kim-7025a1160',
				},
			],
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
