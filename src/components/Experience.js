import { faBorderNone } from '@fortawesome/free-solid-svg-icons';
import { Component } from 'react';
import '../styles/Experience.css';

class Experience extends Component {
	constructor() {
		super();
		this.state = {
			exps: [
				{
					name: 'Company Name',
					location: 'Your City, CA',
					title: 'Your Job Title',
					startMonth: 'Jan',
					startYear: '2012',
					endMonth: 'Feb',
					endYear: '2012',
					tasks: [
						'Wow! This task I did was so amazing! I generated 50000 moneys!',
					],
				},
			],
			editMode: false,
			hovering: false,
			addExpMode: false,
			isCurrWorking: false,
		};
		this.makeEditBtnVisible = this.makeEditBtnVisible.bind(this);
		this.makeEditBtnInvisible = this.makeEditBtnInvisible.bind(this);
		this.startEditMode = this.startEditMode.bind(this);
		this.stopEditMode = this.stopEditMode.bind(this);
		this.startAddExpMode = this.startAddExpMode.bind(this);
		this.stopAddExpMode = this.stopAddExpMode.bind(this);
		this.handleChange = this.handleChange.bind(this);
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
		this.setState({ editMode: false, addExpMode: false });
	}

	startAddExpMode(e) {
		this.setState({ addExpMode: true });
	}

	stopAddExpMode(e) {
		this.setState({ addExpMode: false });
	}

	handleChange(e) {
		const endMonthSelect = document.querySelector('#endMonth');
		const endYearSelect = document.querySelector('#endYear');
		if (e.target.checked) {
			endMonthSelect.disabled = true;
			endYearSelect.disabled = true;
			this.setState({ isCurrWorking: true });
			return;
		}
		endMonthSelect.disabled = false;
		endYearSelect.disabled = false;
		this.setState({ isCurrWorking: false });
	}

	render() {
		return (
			<div
				className="exp-section"
				onMouseOver={this.makeEditBtnVisible}
				onMouseOut={this.makeEditBtnInvisible}
			>
				<h2>Experience</h2>
				{this.state.exps.map((currExp, exp_idx) => (
					<div key={exp_idx} className="exp-container">
						<h3>
							<b>{currExp.name} | </b> {currExp.location}
							<br />
							<div className="title-start-end-date">
								<p className="title">{currExp.title}</p>
								<p className="start-end-date">
									{currExp.startMonth} {currExp.startYear} -{' '}
									{currExp.endMonth} {currExp.endYear}
								</p>
							</div>
						</h3>
						{currExp.tasks.length > 0 ? (
							<ul>
								{currExp.tasks.map((currTask, task_idx) => (
									<li key={task_idx}>
										{currTask}
										{this.state.editMode ? (
											<button
												className="del-task-btn"
												onClick={(e) => {
													currExp.tasks =
														currExp.tasks.filter(
															(value, index) => {
																if (
																	index !==
																	task_idx
																)
																	return value;
																return null;
															}
														);
													this.setState({
														exps: this.state.exps,
													});
												}}
											>
												x
											</button>
										) : null}
									</li>
								))}
							</ul>
						) : null}
						{this.state.editMode ? (
							<div className="edit-task-container">
								<form
									className="task-form"
									id={`taskForm${exp_idx}`}
									onSubmit={(e) => {
										e.preventDefault();
										const addTaskBtn =
											document.querySelector(
												'button.add-task-btn'
											);
										const formData = new FormData(e.target);
										currExp.tasks.push(
											formData.get('task')
										);
										this.setState({
											exps: this.state.exps,
										});
										e.target.style.display = 'none';
										addTaskBtn.style.display = 'block';
										e.target.reset();
									}}
								>
									<textarea
										className="task-input"
										name="task"
										placeholder="Wow! This task I did was so amazing! I generated 50000 moneys!"
										required
									/>
									<button type="submit">Submit</button>
									<button
										type="button"
										className="close-task-form-btn"
										onClick={(e) => {
											const taskForm =
												document.querySelector(
													`div.edit-task-container form#taskForm${exp_idx}`
												);
											const addTaskBtn =
												document.querySelector(
													'button.add-task-btn'
												);
											taskForm.reset();
											taskForm.style.display = 'none';
											addTaskBtn.style.display = 'block';
										}}
									>
										x
									</button>
								</form>
								<button
									className="add-task-btn"
									onClick={(e) => {
										const taskForm = document.querySelector(
											`div.edit-task-container form#taskForm${exp_idx}`
										);
										e.target.style.display = 'none';
										taskForm.style.display = 'flex';
									}}
								>
									Add Task
								</button>
							</div>
						) : null}
						{this.state.editMode ? (
							<button
								className="del-exp-btn"
								onClick={(e) => {
									this.setState({
										exps: this.state.exps.filter(
											(value, index) => {
												if (index !== exp_idx)
													return value;
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

				{this.state.editMode && this.state.addExpMode ? (
					<form
						className="add-exp-form"
						onSubmit={(e) => {
							e.preventDefault();
							const formData = new FormData(e.target);
							this.setState({
								exps: this.state.exps.concat({
									name: formData.get('name'),
									location: formData.get('location'),
									title: formData.get('title'),
									startMonth: formData.get('start_month'),
									startYear: formData.get('start_year'),
									endMonth: this.state.isCurrWorking
										? ''
										: formData.get('end_month'),
									endYear: this.state.isCurrWorking
										? 'Present'
										: formData.get('end_year'),
								}),
								addExpMode: false,
							});
						}}
					>
						<div className="form-row">
							<label for="name">Company</label>
							<input id="name" name="name" type="text" required />
						</div>
						<div className="form-row">
							<label for="location">Location</label>
							<input
								id="location"
								name="location"
								type="text"
								placeholder="Los Angeles, CA"
								required
							/>
						</div>
						<div className="form-row">
							<label for="title">Job Title</label>
							<input
								id="title"
								name="title"
								type="text"
								required
							/>
						</div>
						<div class="form-row">
							<label for="startMonth">Start Month</label>
							<select id="startMonth" name="start_month">
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
						<div class="form-row start-year-row">
							<label for="startYear">Start Year</label>
							<select id="startYear" name="start_year">
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
						<div class="form-row">
							<label class="checkbox-label" for="currWorking">
								<input
									id="currWorking"
									name="curr_working"
									type="checkbox"
									value="is-curr-working"
									onChange={this.handleChange}
								/>
								<span>I’m currently working here</span>
							</label>
						</div>
						<div class="form-row">
							<label for="endMonth">End Month</label>
							<select id="endMonth" name="end_month">
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
						<div class="form-row">
							<label for="endYear">End Year</label>
							<select id="endYear" name="end_year">
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
							onClick={this.stopAddExpMode}
						>
							x
						</button>
					</form>
				) : null}

				{this.state.editMode && !this.state.addExpMode ? (
					<button
						className="add-exp-btn"
						onClick={this.startAddExpMode}
					>
						Add Experience
					</button>
				) : null}

				{this.state.editMode ? (
					<button
						className="exp-submit-btn"
						onClick={this.stopEditMode}
					>
						Submit
					</button>
				) : null}

				{this.state.hovering && !this.state.editMode ? (
					<button
						className="exp-edit-btn"
						onClick={this.startEditMode}
					>
						Edit
					</button>
				) : null}
			</div>
		);
	}
}

export default Experience;
