import React from 'react';
// import logo from '../assets/images/logo.png';
import { ReactComponent as Logo } from '../assets/images/logo_splash.svg';

import './splash-screen.scss';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            {/* <img src={logo} /> */}
            <Logo />
            <div className="loader"></div>
        </div>
    )
}

function withSplashScreen(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                loading: true,
            }

            setTimeout(() => {
                this.setState({
                    loading: false,
                })
            }, 5000)
        }

        render() {
            if (this.state.loading) return LoadingMessage();

            return <WrappedComponent {...this.props} />
        }
    }
}

export default withSplashScreen; 