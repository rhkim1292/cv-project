import {Component} from 'react';
import '../styles/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='style-box'></div>
                <div className='name-title-section'>
                    <h1 className='name'>{this.props.name}</h1>
                    <h2 className='title'>{this.props.title}</h2>
                </div>
                <div className='info-section'>
                    <ul>
                        <li>{this.props.phone}</li>
                        <li>{this.props.email}</li>
                        {this.props.links.map((currLink, idx) => (<li key={idx}>{currLink.link}</li>))}
                    </ul>
                </div>
            </header>
        );
    }
}

export default Header;