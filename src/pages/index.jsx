import borderCollie from 'media/borderCollie.jpg';
import rhodesian from 'media/rhodesian.jpg';
import CardRazasPerros from 'components/CardRazasPerros';
import Layout from 'layouts/Layout';


function Index() {
    return (
            <section>
                <h1 className="title">RAZAS DE PERROS</h1>
                <ul className="breedCardContainer">
                    <CardRazasPerros nombreRaza='Border Collie' imagen={borderCollie} numeroLikes={'450'} numeroComments={'1.1k'} numeroViews={'850'} />
                    <CardRazasPerros nombreRaza='Rhodesian' imagen={rhodesian} numeroLikes={'950'} numeroComments={'1.5k'} numeroViews={'368'} />
                </ul>
            </section>
    )
}

export default Index;