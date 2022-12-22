import { Component } from 'react';
import '../styles/Education.css';

class Education extends Component {
	constructor() {
		super();
		this.state = {
			schools: [
				{
					name: 'Your University',
					location: 'Your City, CA',
					degree: 'B.S.',
					field: 'Your Field of Study',
					gradMonth: 'Jan',
					gradYear: '2012',
				},
			],
			hovering: false,
			editMode: false,
			addSchoolMode: false,
		};
		this.makeEditBtnVisible = this.makeEditBtnVisible.bind(this);
		this.makeEditBtnInvisible = this.makeEditBtnInvisible.bind(this);
		this.startEditMode = this.startEditMode.bind(this);
		this.stopEditMode = this.stopEditMode.bind(this);
		this.startAddSchoolMode = this.startAddSchoolMode.bind(this);
		this.stopAddSchoolMode = this.stopAddSchoolMode.bind(this);
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

	stopEditMode(e) {
		this.setState({ editMode: false, addSchoolMode: false });
	}

	startAddSchoolMode(e) {
		this.setState({ addSchoolMode: true });
	}

	stopAddSchoolMode(e) {
		this.setState({ addSchoolMode: false });
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
					<div key={idx} className="school-container">
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
						{this.state.editMode ? (
							<button
								className="del-school-btn"
								onClick={(e) => {
									this.setState({
										schools: this.state.schools.filter(
											(value, index) => {
												if (index !== idx) return value;
												return null;
											}
										),
									});
								}}
							>
								x
							</button>
						) : null}
					</div>
				))}
				{this.state.editMode && this.state.addSchoolMode ? (
					<form
						className="add-school-form"
						onSubmit={(e) => {
							e.preventDefault();
							const formData = new FormData(e.target);
							this.setState({
								schools: this.state.schools.concat({
									name: formData.get('name'),
									location: formData.get('location'),
									degree: formData.get('degree'),
									field: formData.get('field'),
									gradMonth: formData.get('grad_month'),
									gradYear: formData.get('grad_year'),
								}),
								addSchoolMode: false,
							});
						}}
					>
						<div className="form-row">
							<label htmlFor="name">School Name</label>
							<input id="name" name="name" type="text" required />
						</div>
						<div className="form-row">
							<label htmlFor="location">Location</label>
							<input
								id="location"
								name="location"
								type="text"
								placeholder="Los Angeles, CA"
								required
							/>
						</div>
						<div className="form-row">
							<label htmlFor="degree">Degree</label>
							<select id="degree" name="degree">
								<option value="A.A.">AA</option>
								<option value="A.S.">AS</option>
								<option value="A.A.A.">AAA</option>
								<option value="A.A.S.">AAS</option>
								<option value="B.A.">BA</option>
								<option value="B.S.">BS</option>
								<option value="B.F.A.">BFA</option>
								<option value="M.A.">MA</option>
								<option value="M.S.">MS</option>
								<option value="M.F.A.">MFA</option>
								<option value="Ph.D.">PhD</option>
								<option value="D.B.A">DBA</option>
								<option value="D.H.A.">DHA</option>
								<option value="Ed.D">EdD</option>
								<option value="D.N.P.">DNP</option>
							</select>
						</div>
						<div className="form-row">
							<label htmlFor="field">Field</label>
							<input
								id="field"
								name="field"
								type="text"
								required
							/>
						</div>
						<div className="form-row">
							<label htmlFor="gradMonth">Grad Month</label>
							<select id="gradMonth" name="grad_month">
								<option value="Jan">January</option>
								<option value="Feb">February</option>
								<option value="Mar">March</option>
								<option value="Apr">April</option>
								<option value="May">May</option>
								<option value="June">June</option>
								<option value="July">July</option>
								<option value="Aug">August</option>
								<option value="Sep">September</option>
								<option value="Oct">October</option>
								<option value="Nov">November</option>
								<option value="Dec">December</option>
							</select>
						</div>
						<div className="form-row">
							<label htmlFor="gradYear">Grad Year</label>
							<select id="gradYear" name="grad_year">
								<option value="2012">2012</option>
								<option value="2013">2013</option>
								<option value="2014">2014</option>
								<option value="2015">2015</option>
								<option value="2016">2016</option>
								<option value="2017">2017</option>
								<option value="2018">2018</option>
								<option value="2019">2019</option>
								<option value="2020">2020</option>
								<option value="2021">2021</option>
								<option value="2022">2022</option>
								<option value="2023">2023</option>
								<option value="2024">2024</option>
								<option value="2025">2025</option>
								<option value="2026">2026</option>
								<option value="2027">2027</option>
							</select>
						</div>
						<div className="form-row">
							<button className="form-submit-btn">Submit</button>
						</div>
						<button
							type="button"
							className="close-form-btn"
							onClick={this.stopAddSchoolMode}
						>
							x
						</button>
					</form>
				) : null}

				{this.state.editMode && !this.state.addSchoolMode ? (
					<button
						className="add-school-btn"
						onClick={this.startAddSchoolMode}
					>
						Add School
					</button>
				) : null}

				{this.state.editMode ? (
					<button
						className="education-submit-btn"
						onClick={this.stopEditMode}
					>
						Submit
					</button>
				) : null}

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
