import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import logo from 'media/logo.png';
import CardRazasPerros from 'components/CardRazasPerros';


function Index() {
    return (
        <div>
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
                <CardRazasPerros nombreRaza='Border Collie' imagen={borderCollie} numeroLikes={'450'} numeroComments={'1.1k'} numeroViews={'850'} />
                <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} numeroLikes={'950'} numeroComments={'1.5k'} numeroViews={'368'} />
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
        </div>
    )
}

export default Index;