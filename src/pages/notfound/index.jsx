import './style.css';
import React from 'react';
import Navi from '../../components/nav';




function NotFound() {
    return (
        <React.Fragment>
            <Navi></Navi>

            <h1 className="error">404 Error</h1>
            <p class="zoom-area">This is Not the Web Page you'r Looking For </p>
            <section class="error-container">
                <span><span>4</span></span>
                <span>0</span>
                <span><span>4</span></span>
            </section>

        </React.Fragment>
    )
}
export default NotFound;