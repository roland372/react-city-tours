import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import { tourData } from '../tourData';

export default class TourList extends Component {
	state = {
		// grab tour data
		tours: tourData,
	};

	// method to remove tour from page
	removeTour = id => {
		// destructuring
		const { tours } = this.state;

		// loop through tours, and look for a tour that do not match the id, and display the rest of them
		const sortedTours = tours.filter(
			// return only tours that do not match the id that we're clicking on
			tour => tour.id !== id
		);
		// set state of our tours, to filtered tours, without the item, that we clicked on
		this.setState({
			tours: sortedTours,
		});
	};

	render() {
		// destructuring
		const { tours } = this.state;
		// console.log(tours);

		return (
			<section className='tourlist'>
				{/* loop through tours array */}
				{tours.map(tour => {
					// pass props
					return (
						<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
					);
				})}
			</section>
		);
	}
}
