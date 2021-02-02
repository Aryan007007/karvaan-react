import React from 'react';

import Footer from '../../components/footer/footer.component';

import './book-ticket.styles.scss';

export const TicketCard = () => (
    <div className="ticket-card">
        <h2>Show-Name</h2>
        <p>Some text about the show</p>
        <button>Book</button>
    </div>
)

const BookNow = () => (
    <>
        <div className='tickets-container'>
            <h1>Book Now</h1>
            <div className='tickets-showcase'>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </div>
        </div>
        <Footer />
    </>
)

export default BookNow;