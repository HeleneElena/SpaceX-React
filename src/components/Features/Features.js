import React from 'react';

import './features.css';

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship',
};

const Features = (props) => {
    
	const { name, height, diameter, mass, payload_weights: payloadW, description } = props;

    return (
        <section className="features">
		<h2 className="features-title">
		  {name} <br/>Overview
		</h2>
		<div className="overview">

			<table className="table">
				<caption className="table-title">
					Size
				</caption>
					<thead>
						<tr>
							<td className="table-column"> HEIGHT</td>
							<td className="table-column">{height.meters} m / {height.feet} ft </td>
						</tr>
						<tr>
							<td className="table-column">DIAMETER</td>
							<td className="table-column">{diameter.meters} m / {diameter.feet} ft </td>
						</tr>
						<tr>
							<td className="table-column">MASS</td>
							<td className="table-column">{mass.kg} kg / {mass.lg} lg </td>
						</tr>
						{
							payloadW.map(el => (
								<tr key={el.id} >
									<td className="table-column">PAYLOAD TO {el.id.toUpperCase()}</td>
									<td className="table-column">{el.kg} kg / {el.lb} lb</td>
								</tr>
							))
						}

						
						</thead>		
					</table>
			<img 
					src={`img/${rocketImages[name]}.png`}
					alt="rocket"
					className="rocket"
			/>
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
    );
};

export default Features;