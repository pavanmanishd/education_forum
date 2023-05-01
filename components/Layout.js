import Meta from "./Meta";

export default function Layout({ children }) {
    return (
        <>
            <Meta />
            <div className="container">{children}</div>
        </>
    );
}