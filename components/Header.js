import { ConnectButton } from "web3uikit";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 border-bottom shadow-sm">
            <a className="navbar-brand font-weight-bold text-primary" href="#">NFT Marketplace</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-auto d-flex align-items-center">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link text-dark mx-2 p-2 rounded" style={hoverStyle}>Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/sell-nft">
                            <a className="nav-link text-dark mx-2 p-2 rounded" style={hoverStyle}>Sell NFT</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <ConnectButton moralisAuth={false} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

const hoverStyle = {
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer'
};

const hoverEffect = {
    backgroundColor: '#007bff',
    color: '#fff'
};

const hoverEffectHandler = (event, apply) => {
    Object.assign(event.target.style, apply ? hoverEffect : hoverStyle);
};
