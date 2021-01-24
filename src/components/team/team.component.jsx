import React from 'react';

import TEAM_DATA from '../../store/teamData';

import TeamCard from '../../components/team-card/team-card.component';

import '../team/team.styles.scss';

class Team extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            gaurav: TEAM_DATA.Gaurav,
            simran: TEAM_DATA.Simran,
            arpan: TEAM_DATA.Arpan,
            avik: TEAM_DATA.Avik,
            manawar: TEAM_DATA.Manawar,
            ankankshya: TEAM_DATA.Ankankshya,
            aryan: TEAM_DATA.Aryan
        };

    }

    render() {

        const {
            gaurav,
            simran,
            arpan,
            avik,
            manawar,
            ankankshya,
            aryan
        } = this.state;

        return (
            <div>
                <h1 className='team'>Our Team</h1>
                <div className="contact-grid">
                    <TeamCard {...gaurav} featureLink1={'Atraski Fashion'} />
                    <TeamCard {...simran} />
                    <TeamCard {...arpan} featureLink2={'Mad_Fat_Foodies'} />
                    <TeamCard {...avik} />
                    <TeamCard {...manawar} />
                    <TeamCard {...ankankshya} />
                    <TeamCard {...aryan} featureLink2={'Pankhography'} />
                </div>
            </div>
        )
    }
}

export default Team;