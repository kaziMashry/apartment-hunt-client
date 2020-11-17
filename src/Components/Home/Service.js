import React from 'react';
import service_1 from '../../logos/apartment 1.png';
import service_2 from '../../logos/affordable 1.png';
import service_3 from '../../logos/lessee 1.png';

const services = [
    {
        img: service_1,
        name: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.'
    },
    {
        img: service_2,
        name: 'Financing Made Easy',
        description: 'Our stress-free finance department that can find financial solutions to save you money.'
    },
    {
        img: service_3,
        name: 'Trusted by Thousands',
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.'
    }
];

const Service = () => {
    return (
        <section>
            <p className='text-center text-brand'>Service</p>
            <h2 className='text-center text-brand'>We're an agency tailored to all
clients' needs that always delivers</h2>
            <div className="row d-flex justify-content-center mw-100 pt-4 pb-4">
                {
                    services.map(service => {
                        return <div className="card mr-4 mt-4 col-md-3" style={{ border: "none" }}>
                            <div className="d-flex justify-content-center mt-4">
                                <img className="card-img-top img-fluid serviceCard-image" style={{ width: "20%" }} src={service.img} alt="" />
                            </div>

                            <div className="card-body text-center">
                                <h5 className="card-title font-weight-bolder text-brand">{service.name}</h5>
                                <div className="card-title text-brand">{service.description}</div>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>
    );
};

export default Service;