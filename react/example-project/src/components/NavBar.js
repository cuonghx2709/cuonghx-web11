import React, { Component } from 'react';
import SearchField from './SearchField';
import ProfilePanel from './ProfilePanel';


class NavBar extends Component {
    render() {
        return (
            <div className ="navbar"> 
                <div className ="container">
                    <SearchField/>
                    <div className = "col-6 text-center"> this is logo</div>
                    <ProfilePanel/>
                </div> 

            </div>
        );
    }
}
export default NavBar