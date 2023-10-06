import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center my-3'>
            <img className='mx-auto mt-5 mb-4' src={'/assets/logo.png'} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
        
        </div>
    );
};

export default Header;