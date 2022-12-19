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
					hovering: false,
					editMode: false,
				},
			],
		};
		this.makeEditBtnVisible = this.makeEditBtnVisible.bind(this);
		this.makeEditBtnInvisible = this.makeEditBtnInvisible.bind(this);
		this.startEditMode = this.startEditMode.bind(this);
	}

	makeEditBtnVisible(e) {
		this.setState({ hovering: true });
	}

	makeEditBtnInvisible(e) {
		this.setState({ hovering: false });
	}

	startEditMode(e) {
		this.setState({ editMode: true });
	}

	render() {
		return (
			<div
				className="education-section"
				onMouseOver={this.makeEditBtnVisible}
                onMouseOut={this.makeEditBtnInvisible}
			>
				<h2>Education</h2>
				{this.state.schools.map((currSchool, idx) => (
					<div className="school-container">
						<h3>
							<b>{currSchool.name} | </b> {currSchool.location}
							<br />
							<div className="degree-field-grad-date">
								<p className="degree-field">
									{currSchool.degree} in {currSchool.field}
								</p>
								<p className="grad-date">
									{currSchool.gradMonth} {currSchool.gradYear}
								</p>
							</div>
						</h3>
					</div>
				))}
				{this.state.hovering && !this.state.editMode ? (
					<button
						className="education-edit-btn"
						onClick={this.startEditMode}
					>
						Edit
					</button>
				) : null}
			</div>
		);
	}
}

export default Education;
