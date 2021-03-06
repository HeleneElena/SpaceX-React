import React from 'react';
import logo from '../../logo.svg';

import './header.css';

const Header = ({ rockets, changeRocket }) => (
        <header className="header">
		    <img
				    src={logo}
				    alt="Logo Space X"
				    className="logo"
		    />
		    <nav className="main-nav nav">
			    <ul className="list">
					{
						rockets.map((el, index) => (
							<li key={index} className="item">
					    		<a 
									href="/" 
									onClick={e => {
										e.preventDefault();
										changeRocket(el)
									}} 
									className="item-link">
								{el}</a>
				    		</li>
						))
					}	    			
			    </ul>
		    </nav>
		   
	    </header>
    );

export default Header;