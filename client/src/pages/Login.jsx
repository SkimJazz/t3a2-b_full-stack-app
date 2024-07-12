
// This Link component is used to navigate to the Signup page from the Login page.
// It will only work for the pages that are defined in the pages' directory.
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h1> Login Page </h1>
            <Link to="/signup">Signup page</Link>
        </div>
    );
};

export default Login;