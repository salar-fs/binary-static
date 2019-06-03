import React from 'react';

const FAQ = () => {
    const affiliate_faq_items = [
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/marketing-dark.svg'),
            link : `${it.url_for('affiliate/faq')}#general`,
            text : it.L('General'),
        },
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/account-dark.svg'),
            link : `${it.url_for('affiliate/faq')}#account-management-and-tracking`,
            text : it.L('Account management'),
        },
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/general-faq-dark.svg'),
            link : `${it.url_for('affiliate/faq')}#referral-tools`,
            text : it.L('Referral tools'),
        },
    ];

    const ib_faq_item = [
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/marketing-dark.svg'),
            link : `${it.url_for('ib-programme/ib-faq')}#general`,
            text : it.L('General'),
        },
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/account-dark.svg'),
            link : `${it.url_for('ib-programme/ib-faq')}#account-management`,
            text : it.L('Account management'),
        },
        {
            image: it.url_for('images/pages/affiliates_ib_landing/icons/general-faq-dark.svg'),
            link : `${it.url_for('ib-programme/ib-faq')}#referral-tools`,
            text : it.L('Referral tools'),
        },
    ];

    return (
        <section id='faq'>
            <div className='container center-text'>
                <h2 className='faq-header'>{it.L('Frequently asked questions')}</h2>

                <div className='gr-row'>
                    <div className='gr-10 gr-12-m gr-12-p gr-centered'>
                        <div className='gr-row'>
                            <div className='gr-6 gr-12-m gr-padding-10'>
                                <div className='faq-item'>
                                    <p className='faq-item-header secondary-color'>{it.L('Affiliate')}</p>

                                    <ul className='faq-item-content'>
                                        { affiliate_faq_items.map((item, index) => (
                                            <li key={index}>
                                                <img className='faq-item-content-image' src={item.image} alt={item.text} />
                                                <a href={item.link} className='faq-item-content-text'>{item.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='gr-6 gr-12-m gr-padding-10'>
                                <div className='faq-item'>
                                    <p className='faq-item-header secondary-color'>{it.L('Introducing Broker')}</p>

                                    <ul className='faq-item-content'>
                                        { ib_faq_item.map((item, index) => (
                                            <li key={index}>
                                                <img className='faq-item-content-image' src={item.image} alt={item.text} />
                                                <a href={item.link} className='faq-item-content-text'>{item.text}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className='faq-message'>{it.L('For further assistance, email us at [_1]affiliates@binary.com[_2]', '<a href="mailto:affiliates@binary.com">', '</a>')}</p>
            </div>
        </section>
    );
};

export default FAQ;
