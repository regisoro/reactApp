// le Layout permet de selectionner l'itinéraire des URL

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/useeff">UseEff</Link>
                    </li>
                    <li>
                        <Link to="/form" >Form</Link>
                    </li>
                </ul>
            </nav>
            {/* rendre l'itinéraire actuel selectionné */}
            <Outlet />
        </>
    );
}
export default Layout;