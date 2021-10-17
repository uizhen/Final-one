import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from 'reactstrap';

const items = [
    {
        id: 1,
        icon: 'currency-btc',
        title: 'Bitcoin',
        description: 'Bitcoin prices fell sharply amid the global sell-off in equities.Negative news over the past week has dampened sentiment for bitcoin.'
    },
    {
        id: 2,
        icon: 'ethereum',
        title: 'ETH',
        description: 'Bitcoin prices fell sharply amid the global sell-off in equities.Negative news over the past week has dampened sentiment for bitcoin.'
    },
    {
        id: 3,
        icon: 'litecoin',
        title: 'Litecoin',
        description: 'Bitcoin prices fell sharply amid the global sell-off in equities.Negative news over the past week has dampened sentiment for bitcoin.'
    }
];

const NewSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
                tag="div"
                key={item.id}
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
            >
                <div className="text-center p-4">
                    <i className={'mdi mdi-' + item.icon + 'bitcoin widget-box-1-icon'}></i>
                    <div className="avatar-md m-auto">
                        <span className="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                            <i className={'mdi mdi-' + item.icon}></i>
                        </span>
                    </div>
                    <h4 className="mt-3 lh-base fw-normal text-white"><b>{item.title}</b> News</h4>
                    <p className="text-white-50 font-size-13"> {item.description} </p>
                    <Link to="/invoices-list" className="btn btn-light btn-sm" >
                        View details <i className="mdi mdi-arrow-right ms-1"></i>
                    </Link>
                </div>
            </CarouselItem>
        );
    });

    return (
        <div className="col-xl-4">
            <div className="card bg-primary text-white shadow-primary card-h-100">
                <div className="card-body p-0">
                    <Carousel
                        activeIndex={activeIndex}
                        next={next}
                        previous={previous}
                    >
                        {slides}
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default NewSlider;