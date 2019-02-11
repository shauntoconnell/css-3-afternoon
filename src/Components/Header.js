import React, {Component} from 'react';
import './Header.css';

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {toggle: false};
	}

	toggler = () => this.setState(prevState => ({toggle: !prevState.toggle}));

	render() {
		return (
			<header className='header-container'>
				<div>
					<div className='logo'>Start Bootstrap</div>
					<button onClick={this.toggler}>MENU</button>
					<ul id={this.state.toggle ? 'show' : 'hide'} className='default-nav'>
						<li>
							<a href='#'>SERVICES</a>
						</li>
						<li>
							<a href='#'>PORTFOLIO</a>
						</li>
						<li>
							<a href='#'>ABOUT</a>
						</li>
						<li>
							<a href='#'>TEAM</a>
						</li>
						<li>
							<a href='#'>CONTACT</a>
						</li>
					</ul>
				</div>
			</header>
		)
	}
}