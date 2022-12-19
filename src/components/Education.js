import { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
	constructor() {
		super();
		this.state = {
			schools: [
				{
					name: 'University of California, San Diego',
					location: 'La Jolla, CA',
					degree: 'B.S.',
					field: 'Computer Science',
					gradMonth: 'June',
					gradYear: '2020',
				},
			],
		};
	}
	render() {
		return (
			<div className="education-section">
				<h2>Education</h2>
				{this.state.schools.map((currSchool, idx) => (
					<div className="school-container">
						<h3>
							<b>{currSchool.name} | </b> {currSchool.location}<br />
                            <div className="degree-field-grad-date">
                                <p className="degree-field">{currSchool.degree} in {currSchool.field}</p>
                                <p className="grad-date">{currSchool.gradMonth} {currSchool.gradYear}</p>
                            </div>
						</h3>
					</div>
				))}
			</div>
		);
	}
}

export default Education;
