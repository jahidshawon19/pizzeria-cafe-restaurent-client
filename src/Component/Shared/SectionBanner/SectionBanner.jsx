import './SectionBanner.css'; 

const SectionBanner = ({title, img}) => {
    return (
        <>
            <section className="banner-section d-flex justify-content-center align-items-center" style={{ backgroundImage: `url('${img}')` }}>
                <h2 className='banner-title'>{title}</h2>
            </section>
        </>
    );
};

export default SectionBanner;