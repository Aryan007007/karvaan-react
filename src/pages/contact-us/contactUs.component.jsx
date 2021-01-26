import React from 'react';

import NavBar from '../../components/nav-bar/nav-bar.component';
import ContactUsForm from '../../components/contact-us-form/contact-us-form.component';
import ContactSocial from '../../components/contact-social/contact-social.component';
import Footer from '../../components/footer/footer.component'

const ContactUsPage = () => (
    <div>
        <NavBar accent='green' />
        <ContactUsForm />
        <ContactSocial />
        <Footer />
    </div>
)

export default ContactUsPage;