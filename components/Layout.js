import Meta from "./Meta";
import Nav from "./Navbar";

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <Nav />
            <div className="container">{children}</div>
        </>
    );
}