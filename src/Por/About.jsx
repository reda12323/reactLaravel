import './About.css';
export default function About(){
    return(
        <div>
            <nav>
                <div className="aboutp"><div className='usp'>About us</div></div>
                <div className='flex ush1'>
                    <div>
                    <h1>QUI SOMMES NOUS ?</h1>
                    <p>PCSTORE MAROC est un site d’e-commerce qui a été créé en 2017 avec pour objet de faciliter la fonction achat au citoyen marocain, en proposant un vaste choix de produits informatiques et électroniques. Notre défi quotidien est d’offrir à nos clients des solutions adaptées à leurs besoins au meilleur prix du marché. La satisfaction de nos clients est notre principale motivation.</p>
                    </div>
                    <div id='div'>
                        <h1>PAIEMENT</h1>
                        <p>Pour vous faciliter la vie, PCSTORE MAROC met à votre disposition des modes de paiement. Vous pouvez donc choisir l’un de ces 4 modes de paiement : 1/ Le paiement en espèces à la livraison (ou en contre-remboursement) 2/ Le paiement par dépôt d’espèces dans une agence bancaire 3/ Le paiement par chèque bancaire certifié 4/ Le paiement par virement bancaire</p>
                    </div>
                    <div id='div'>
                        <h1>LIVRAISON</h1>
                        <p>PCSTORE MAROC vous commandez et vous vous faites livrer partout au Maroc à domicile ou à l’adresse que vous avez précisée lors de votre commande. Achetez sans vous déplacer, votre commande vous est livrée, dans les plus brefs délais en fonction de la disponibilité des produits, du mode de paiement choisi,</p>
                    </div>
                </div>
            </nav>
        </div>
    )
}