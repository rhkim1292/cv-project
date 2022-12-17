import { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'YOUR NAME',
			title: 'Your Title',
			phone: '123-456-7890',
			email: 'your@email.com',
			links: [],
			hovering: false,
			editMode: false,
			addLinkMode: false,
		};
		this.startEditMode = this.startEditMode.bind(this);
		this.startAddLinkMode = this.startAddLinkMode.bind(this);
		this.makeEditBtnVisible = this.makeEditBtnVisible.bind(this);
		this.makeEditBtnInvisible = this.makeEditBtnInvisible.bind(this);
		this.handleHeaderFormSubmit = this.handleHeaderFormSubmit.bind(this);
		this.handleAddLink = this.handleAddLink.bind(this);
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

	startAddLinkMode(e) {
		this.setState({ addLinkMode: true });
	}

	handleHeaderFormSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		this.setState({
			name: formData.get('name'),
			title: formData.get('title'),
			phone: formData.get('phone'),
			email: formData.get('email'),
			editMode: false,
			addLinkMode: false,
		});
	}

	handleAddLink(e) {
		const linkTypeSelect = document.querySelector(
			'div.add-link-container select#linkType'
		);
		const linkInput = document.querySelector(
			'div.add-link-container input#link'
		);

		this.setState({
			links: this.state.links.concat({
				linkType: linkTypeSelect.value,
				link: linkInput.value,
			}),
			addLinkMode: false,
		});
	}

	render() {
		return (
			<header
				onMouseOver={this.makeEditBtnVisible}
				onMouseOut={this.makeEditBtnInvisible}
			>
				<div className="style-box"></div>
				<form onSubmit={this.handleHeaderFormSubmit}>
					<div className="name-title-section">
						{this.state.editMode ? (
							<input
								defaultValue={this.state.name}
								id="nameInput"
								name="name"
								placeholder="YOUR NAME"
								required
							/>
						) : (
							<h1 className="name">{this.state.name}</h1>
						)}
						{this.state.editMode ? (
							<input
								defaultValue={this.state.title}
								id="titleInput"
								name="title"
								placeholder="Your Title"
								required
							/>
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
										placeholder="123-456-7890"
										pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
										required
									/>
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
										required
									/>
								) : (
									this.state.email
								)}
							</li>
							{this.state.links.map((currLink, idx) => (
								<li key={idx}>{currLink.link}</li>
							))}
							{this.state.editMode &&
								(this.state.addLinkMode ? (
									<div className="add-link-container">
										<select name="link_type" id="linkType">
											<option value="github">
												GitHub
											</option>
											<option value="linkedin">
												LinkedIn
											</option>
											<option value="other">Other</option>
										</select>
										<input name="link" id="link" />
										<button
											type="button"
											onClick={this.handleAddLink}
										>
											Add
										</button>
									</div>
								) : (
									<button
										id="addLinkBtn"
										type="button"
										onClick={this.startAddLinkMode}
									>
										Add Link
									</button>
								))}
						</ul>
					</div>
					{this.state.editMode ? (
						<button className="header-submit-btn" type="submit">
							Submit
						</button>
					) : null}
				</form>
				{this.state.hovering && !this.state.editMode ? (
					<button
						className="header-edit-btn"
						onClick={this.startEditMode}
					>
						Edit
					</button>
				) : null}
			</header>
		);
	}
}

export default Header;
