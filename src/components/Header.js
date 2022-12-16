import { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'YOUR NAME',
			title: 'Your Title',
			phone: '(123) 456-7890',
			email: 'your@email.com',
			links: [],
			editMode: false,
		};
		this.startEditMode = this.startEditMode.bind(this);
		this.makeEditBtnVisible = this.makeEditBtnVisible.bind(this);
		this.makeEditBtnInvisible = this.makeEditBtnInvisible.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	makeEditBtnVisible(e) {
		if (this.state.editMode) return;
		const editBtn = document.querySelector('header button.header-edit-btn');
		editBtn.style.display = 'block';
	}

	makeEditBtnInvisible(e) {
		if (this.state.editMode) return;
		const editBtn = document.querySelector('header button.header-edit-btn');
		editBtn.style.display = 'none';
	}

	startEditMode(e) {
		const editBtn = document.querySelector('header button.header-edit-btn');
		const submitBtn = document.querySelector(
			'header form button.header-submit-btn'
		);
		this.setState({ editMode: true });
		editBtn.style.display = 'none';
		submitBtn.style.display = 'block';
	}

	handleSubmit(e) {
		const submitBtn = document.querySelector(
			'header form button.header-submit-btn'
		);
		e.preventDefault();
		const formData = new FormData(e.target);
		this.setState({
			name: formData.get('name'),
			title: formData.get('title'),
			phone: formData.get('phone'),
            email: formData.get('email'),
			editMode: false,
		});
		submitBtn.style.display = 'none';
	}

	render() {
		return (
			<header
				onMouseOver={this.makeEditBtnVisible}
				onMouseOut={this.makeEditBtnInvisible}
			>
				<div className="style-box"></div>
				<form onSubmit={this.handleSubmit}>
					<div className="name-title-section">
						{this.state.editMode ? (
							<input
								defaultValue={this.state.name}
								id="nameInput"
								name="name"
								placeholder="YOUR NAME"
							></input>
						) : (
							<h1 className="name">{this.state.name}</h1>
						)}
						{this.state.editMode ? (
							<input
								defaultValue={this.state.title}
								id="titleInput"
								name="title"
								placeholder="Your Title"
							></input>
						) : (
							<h2 className="title">{this.state.title}</h2>
						)}
					</div>
					<div className="info-section">
						<ul>
							<li>
								{this.state.editMode ? (
									<input
										type="tel"
										defaultValue={this.state.phone}
										id="phoneInput"
										name="phone"
										placeholder="(123) 456-7890"
									></input>
								) : (
									this.state.phone
								)}
							</li>
							<li>
								{this.state.editMode ? (
									<input
										type="email"
										defaultValue={this.state.email}
										id="emailInput"
										name="email"
										placeholder="your@email.com"
									></input>
								) : (
									this.state.email
								)}
							</li>
							{this.state.links.map((currLink, idx) => (
								<li key={idx}>{currLink.link}</li>
							))}
						</ul>
					</div>
					<button className="header-submit-btn" type="submit">
						Submit
					</button>
				</form>
				<button
					className="header-edit-btn"
					onClick={this.startEditMode}
				>
					Edit
				</button>
			</header>
		);
	}
}

export default Header;
