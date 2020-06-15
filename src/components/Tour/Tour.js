import React, { Component } from 'react';
import './Tour.scss';

export default class Tour extends Component {
	state = {
		// hide info initially
		showInfo: false,
	};

	// method to display/hide info
	handleInfo = () => {
		this.setState({
			// everytime we click, change value/boolean to opposite
			showInfo: !this.state.showInfo,
		});
	};

	render() {
		// destructuring
		const { id, city, img, name, info } = this.props.tour;
		const { removeTour } = this.props;

		return (
			<article className='tour'>
				<div className='img-container'>
					<img src={img} alt='' />
					<span
						className='close-btn'
						onClick={() => {
							removeTour(id);
						}}
					>
						<i className='fas fa-window-close'></i>
					</span>
				</div>
				<div className='tour-info'>
					<h3>{city}</h3>
					<h4>{name}</h4>
					<h5>
						info
						<span onClick={this.handleInfo}>
							<i className='fas fa-caret-square-down'></i>
						</span>
					</h5>
					{this.state.showInfo && <p>{info}</p>}
				</div>
			</article>
		);
	}
}
