import React from 'react';

import TEAM_DATA from '../../store/store';

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

        const { gaurav, simran, arpan, avik, manawar, ankankshya, aryan } = this.state;

        return (
            <div>
                <h1>Our Team</h1>
                <div className="contact-grid">
                    <div className="card">
                        <img src={gaurav.imageUrl} alt={gaurav.name} />
                        <div className="container" >
                            <h2>{gaurav.name}</h2>
                            <big className="title">{gaurav.title}</big>
                            <p>{gaurav.feature_1}<a href={gaurav.attribute_1}>Atraski Fashion</a> <br /> {gaurav.feature_2}</p>
                            <h2 className="team-social">
                                <a href={gaurav.social_insta} className="fa fa-instagram"></a>
                                {/* <a href="" className="fa fa-facebook-f"></a> */}
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={simran.imageUrl} alt={simran.name} />
                        <div className="container" >
                            <h2>{simran.name}</h2>
                            <big className="title">{simran.title}</big>
                            <p>{simran.feature_1}Some text<a href={simran.attribute_1}></a> <br /> {simran.feature_2}Some text</p>
                            <h2 className="team-social">
                                <a href={simran.social_insta} className="fa fa-instagram"></a>
                                {/* <a href="" className="fa fa-facebook-f"></a> */}
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={arpan.imageUrl} alt={arpan.name} />
                        <div className="container" >
                            <h2>{arpan.name}</h2>
                            <big className="title">{arpan.title}</big>
                            <p>{arpan.feature_1}<br />{arpan.feature_2} <a href={arpan.attribute_2}>Mad_Fat_Foodies</a></p>
                            <h2 className="team-social">
                                <a href={arpan.social_insta} className="fa fa-instagram"></a>
                                {/* <a href="" className="fa fa-facebook-f"></a> */}
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={avik.imageUrl} alt={avik.name} />
                        <div className="container" >
                            <h2>{avik.name}</h2>
                            <big className="title">{avik.title}</big>
                            <p>{avik.feature_1}Some text<a href={avik.attribute_1}></a> <br /> {avik.feature_2}Some text</p>
                            <h2 className="team-social">
                                <a href={avik.social_insta} className="fa fa-instagram"></a>
                                {/* <a href="" className="fa fa-facebook-f"></a> */}
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={manawar.imageUrl} alt={manawar.name} />
                        <div className="container" >
                            <h2>{manawar.name}</h2>
                            <big className="title">{manawar.title}</big>
                            <p>{manawar.feature_1}<a href={manawar.attribute_1}></a> <br /> {manawar.feature_2}</p>
                            <h2 className="team-social">
                                <a href={manawar.social_insta} className="fa fa-instagram"></a>
                                <a href="" className="fa fa-youtube"></a>
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={ankankshya.imageUrl} alt={ankankshya.name} />
                        <div className="container" >
                            <h2>{ankankshya.name}</h2>
                            <big className="title">{ankankshya.title}</big>
                            <p>{ankankshya.feature_1}Some text<a href={ankankshya.attribute_1}></a> <br /> {ankankshya.feature_2}Some text</p>
                            <h2 className="team-social">
                                <a href={ankankshya.social_insta} className="fa fa-instagram"></a>
                                {/* <a href="" className="fa fa-facebook-f"></a> */}
                            </h2>
                            <button className="button">Contact</button>
                        </div>
                    </div>


                    <div className="card">
                        <img src={aryan.imageUrl} alt={aryan.name} />
                        <div className="container">
                            <h2>{aryan.name}</h2>
                            <big className="title">{aryan.title}</big>
                            <p>{aryan.feature_1}<br />{aryan.feature_2}<a
                                href={aryan.attribute_2}>Pankhography</a></p>
                            <h2 className="team-social">
                                <a href={aryan.social_insta} className="fa fa-instagram"></a>
                                <a href={aryan.social_fb} className="fa fa-facebook-f"></a>
                            </h2>
                            <a href={aryan.email}><button className="button">E-mail</button></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Team;