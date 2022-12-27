import { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [name, setName] = useState('YOUR NAME');
	const [title, setTitle] = useState('Your Title');
	const [phone, setPhone] = useState('123-456-7890');
	const [email, setEmail] = useState('your@email.com');
	const [links, setLinks] = useState([]);
	const [hovering, setHovering] = useState(false);
	const [editMode, setEditMode] = useState(false);
	const [addLinkMode, setAddLinkMode] = useState(false);

	const makeEditBtnVisible = (e) => {
		setHovering(true);
	};

	const makeEditBtnInvisible = (e) => {
		setHovering(false);
	};

	const startEditMode = (e) => {
		setEditMode(true);
	};

	const startAddLinkMode = (e) => {
		setAddLinkMode(true);
	};

	const stopAddLinkMode = (e) => {
		setAddLinkMode(false);
	};

	const handleHeaderFormSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const linkAddBtn = document.getElementById('addBtn');
		if (linkAddBtn) linkAddBtn.click();
		setName(formData.get('name'));
		setTitle(formData.get('title'));
		setPhone(formData.get('phone'));
		setEmail(formData.get('email'));
		setEditMode(false);
		setAddLinkMode(false);
	};

	const handleAddLink = (e) => {
		const linkTypeSelect = document.querySelector(
			'div.add-link-container select#linkType'
		);
		const linkInput = document.querySelector(
			'div.add-link-container input#link'
		);

		setLinks(
			links.concat({
				linkType: linkTypeSelect.value,
				link: linkInput.value,
			})
		);
		setAddLinkMode(false);
	};

	const displayLinkIcon = (currLink) => {
		switch (currLink.linkType) {
			case 'github':
				return <FontAwesomeIcon icon={faGithub} />;
			case 'linkedin':
				return <FontAwesomeIcon icon={faLinkedin} />;
			default:
				return <FontAwesomeIcon icon={faLink} />;
		}
	};

	return (
		<header
			onMouseOver={makeEditBtnVisible}
			onMouseOut={makeEditBtnInvisible}
		>
			<div className="style-box"></div>
			<form onSubmit={handleHeaderFormSubmit}>
				<div className="name-title-section">
					{editMode ? (
						<input
							defaultValue={name}
							id="nameInput"
							name="name"
							placeholder="YOUR NAME"
							required
						/>
					) : (
						<h1 className="name">{name}</h1>
					)}
					{editMode ? (
						<input
							defaultValue={title}
							id="titleInput"
							name="title"
							placeholder="Your Title"
							required
						/>
					) : (
						<h2 className="title">{title}</h2>
					)}
				</div>
				<div className="info-section">
					<ul>
						<li>
							<FontAwesomeIcon icon={faPhone} />
							{editMode ? (
								<input
									type="tel"
									defaultValue={phone}
									id="phoneInput"
									name="phone"
									placeholder="123-456-7890"
									pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
									required
								/>
							) : (
								phone
							)}
						</li>
						<li>
							<FontAwesomeIcon icon={faEnvelope} />
							{editMode ? (
								<input
									type="email"
									defaultValue={email}
									id="emailInput"
									name="email"
									placeholder="your@email.com"
									required
								/>
							) : (
								email
							)}
						</li>
						{links.map((currLink, idx) => (
							<li key={idx}>
								{displayLinkIcon(currLink)}
								{currLink.link}
								{editMode ? (
									<button
										type="button"
										onClick={(e) => {
											setLinks(
												links.filter((value, index) => {
													if (index !== idx)
														return value;
													return null;
												})
											);
										}}
									>
										x
									</button>
								) : null}
							</li>
						))}
						{editMode &&
							(addLinkMode ? (
								<div className="add-link-container">
									<select name="link_type" id="linkType">
										<option value="github">GitHub</option>
										<option value="linkedin">
											LinkedIn
										</option>
										<option value="other">Other</option>
									</select>
									<input type="url" name="link" id="link" />
									<button
										id="addBtn"
										type="button"
										onClick={handleAddLink}
									>
										Add
									</button>
									<button
										className="del-link-btn"
										onClick={stopAddLinkMode}
									>
										x
									</button>
								</div>
							) : (
								<button
									id="addLinkBtn"
									type="button"
									onClick={startAddLinkMode}
								>
									Add Link
								</button>
							))}
					</ul>
				</div>
				{editMode ? (
					<button className="header-submit-btn" type="submit">
						Submit
					</button>
				) : null}
			</form>
			{hovering && !editMode ? (
				<button className="header-edit-btn" onClick={startEditMode}>
					Edit
				</button>
			) : null}
		</header>
	);
}

export default Header;
