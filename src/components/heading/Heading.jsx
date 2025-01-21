
const Heading = ({title, subtitle}) => {
    return (
        <div className="text-center p-5">
            <h1 className="text-5xl font-bold mb-2">{title}</h1>
            <p>{subtitle}</p>
        </div>
    );
};



export default Heading;