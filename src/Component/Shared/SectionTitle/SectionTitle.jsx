import './SectionTitle.css';
const SectionTitle = ({subTitle, title}) => {
    return (
        <>
            <div className="title-section text-center">
                <span className='sub-title'>{subTitle}</span>
                <h3 className='title mt-3'>{title}</h3>
            </div>
        </>
    );
};

export default SectionTitle;