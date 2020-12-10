import Logo from './Logo';
import Button from './Button';
import User from './User';
import Profile from './Profile';
import Logout from './Logout';

function Header() {
    return (
        <div className="header">
            <Logo />
            <Button />
            <User />
            <Profile />
            <Logout />
        </div>
    );
}

export default Header;