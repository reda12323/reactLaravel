import NouvelAr from "./NouvelAr";
import './Arrivages.css';
export default function NouvelArs() {
    const arrivales= [
        { id: 1, url: "http://localhost:3000/pc1.jpeg", name: "PC Gamer UltraPC Core i7 11400F/512GB SSD/16GB/RTX4070", new_price: "8 999,00 DH ", old_price: "10 000,00 DH", disponibility: "IN STOCK" },
        { id: 2, url: "http://localhost:3000/pc2.jpeg", name: "PC Gamer UlltraProPc Core i5 11600K/1TB SSD/32GB/RTX3060", new_price: "7 500,00 DH ", old_price: "8 500,00 DH", disponibility: "IN STOCK" },
        { id: 3, url: "http://localhost:3000/pc3.jpeg", name: "PC Gamer Supreme i9 11900K/2TB SSD/64GB/RTX3080", new_price: "12 000,00 DH ", old_price: "13 000,00 DH", disponibility: "IN STOCK" },
        { id: 4, url: "http://localhost:3000/pc4.jpeg", name: "PC Gamer Extreme i9 12900K/4TB SSD/128GB/RTX3090", new_price: "18 000,00 DH ", old_price: "20 000,00 DH", disponibility: "OUT OF STOCK" },
        { id: 5, url: "http://localhost:3000/pc5.jpeg", name: "PC Gamer Advanced Ryzen 9 5900X/2TB SSD/64GB/RX6800XT", new_price: "15 000,00 DH ", old_price: "16 000,00 DH", disponibility: "IN STOCK" },
        { id: 6, url: "http://localhost:3000/pc6.jpeg", name: "PC Gamer Elite Ryzen 7 5800X/1TB SSD/32GB/RX6700XT", new_price: "10 000,00 DH ", old_price: "11 000,00 DH", disponibility: "IN STOCK" },
        { id: 7, url: "http://localhost:3000/pc7.jpeg", name: "PC Gamer Budget Ryzen 5 5600X/512GB SSD/16GB/RX6600", new_price: "8 000,00 DH ", old_price: "9 000,00 DH", disponibility: "IN STOCK" },
        { id: 8, url: "http://localhost:3000/pc8.jpeg", name: "PC Gamer Entry Ryzen 3 5300G/256GB SSD/8GB/RX6500", new_price: "5 000,00 DH ", old_price: "6 000,00 DH", disponibility: "IN STOCK" },
    ];
    return(
        <div className='Collections'>
            <div className="container mx-auto p-4 pt-20" >
                <h1 id="Arriv">NOUVEL ARRIVAGE</h1>
            </div>
            <div className="Collections-item">
                {arrivales.map((ele) => (
                    <div  className="Collections-product" key={ele.id}><NouvelAr info={ele} /></div>
                ))}
            </div>
        </div>
    )
}
