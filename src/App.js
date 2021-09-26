import logo from './media/logo.png';
import './styles/App.css';
import borderCollie from './media/borderCollie.jpg';
import rhodesian from './media/rhodesian.jpg';


function App() {
  return (
    <div className="App">
    <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="Logo" class="logo"/>
            </li>
            <li>
                <div class="buscar">
                    <input placeholder="Busque una raza..."/>
                    <i className="fas fa-search button iconoBusqueda"></i>
                </div>
            </li>
            <li>
                <button className="button mainButton">+Nuevo post</button>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1 className="title">RAZAS DE PERROS</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie" />
                    </div>
                    <span className="breedTitle">Border Collie</span>
                    <ul className="animations">
                        <li>
                            <i className="fas fa-heart"></i>
                            150
                        </li>
                        <li>
                            <i className="far fa-comment"></i>
                            1.5k
                        </li>
                        <li>
                            <i className="fas fa-eye"></i>
                            120
                        </li>
                    </ul>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                    <img src={rhodesian} alt="Border Collie" />
                </div>
                <span className="breedTitle">Rhodesian</span>
                <ul className="animations">
                    <li>
                        <i className="fas fa-heart"></i>
                        450
                    </li>
                    <li>
                        <i className="far fa-comment"></i>
                        1.1k
                    </li>
                    <li>
                        <i className="fas fa-eye"></i>
                        850
                    </li>
                </ul>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
