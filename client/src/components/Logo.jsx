import logo from '../assets/images/logo.svg';

// Create the component
const Logo = () => {
    return <img
        src={logo}
        alt='tradesequip'
        className='logo'
    />;
};
export default Logo;


// Alternate version to include text with the logo
// const Logo = () => {
//     return (
//         <div className="logo-container">
//             <img src={logo} alt='tradesequip' className='logo-image'/>
//             <span className="logo-text">TradesEquip</span>
//         </div>
//     );
// };
// export default Logo;



