import React from 'react';
import logo from '../assets/images/logo.png';

import './splash-screen.scss';

function LoadingMessage() {
    return (
        <div className="splash-screen">
            <img src={logo} />
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