import './Navbar.css'; // Importe o arquivo CSS para estilização

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1 className="navbar-logo">StreamApp</h1>
            </div>
            <div className="navbar-center">
                <input 
                    type="text"
                    placeholder="Digite o nome do vídeo aqui."
                    className="search-input"
                />
                <button disabled className="search-button">Pesquisar</button>
            </div>
            <div className="navbar-right">
                <a href="/" className="nav-link">Home</a>
                <a href="/catalog" className="nav-link">Catalog</a>
                <a href="/videos" className="nav-link">Videos</a>
            </div>
        </nav>
    );
}