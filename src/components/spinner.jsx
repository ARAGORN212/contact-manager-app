import SpinnerGIF from '../assets/Settings.gif';

const Spinner = () => {
    return (
        <>
            <img className='d-block m-auto' style={{width:"200px"}} src={SpinnerGIF} alt="spinner-loader" />
        </>
    )
}

export default Spinner;