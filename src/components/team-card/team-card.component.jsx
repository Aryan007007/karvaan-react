import React from 'react';

import '../team-card/team-card.styles.scss';

class TeamCard extends React.Component {

    render() {

        const {
            imageUrl,
            name,
            title,
            feature_1,
            attribute_1,
            feature_2,
            attribute_2,
            social_insta,
            featureLink1,
            featureLink2,
            email
        } = this.props;

        return (
            <div className="card">
                <img src={imageUrl} alt={name} />
                <div className="container" >
                    <h2>{name}</h2>
                    <big className="title">{title}</big>
                    <p>{feature_1}<a href={attribute_1}>{featureLink1}</a> <br /> {feature_2}<a href={attribute_2}>{featureLink2}</a>  </p>
                    <h2 className="team-social">
                        <a href={social_insta} className="fa fa-instagram"></a>
                    </h2>
                    <button className="button"><a href={email}>Email</a></button>
                </div>
            </div>
        )

    }
}

export default TeamCard;