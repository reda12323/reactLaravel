import React from "react";
import './MidContacte.css';
export default function MidContacte(){
    return(
        <div>
            <div id="ContAll" className="flex">
                <div id="ContAll2">
                    <p className="" id="ContP1">Contact Us</p>
                    <div id="ContDesc">Africa Gaming MAROC est une entreprise spécialisée dans la vente de PC & de matériel informatique & électronique au Maroc.</div>
                    <p id="ContP2">SIÈGE SOCIAL</p>
                    <ul>
                        <li id="ContDesc">65, Avenue Moulay Ali Cherif (Bab Bouhaja)</li>
                        <li id="ContDesc">Salé – Maroc</li>
                    </ul>

                    <p id="ContP2">ÉCRIVEZ-NOUS :</p>
                    <ul>
                        <li id="ContDesc">pcstorema@gmail.com</li>
                    </ul>

                    <p id="ContP2">APPELEZ-NOUS</p>
                    <ul>
                        <li id="ContDesc">+212 6 81 27 11 90</li>
                    </ul>

                    <p id="ContP2">JOURS & HEURES D’OUVERTURE</p>
                    <ul>
                        <li id="ContDesc">Lundi à Samedi : 10:30 à 19:30</li>
                        <li id="ContDesc">Dimanche: Fermé</li>
                    </ul>

                    <p id="ContP2">RÉSEAUX SOCIAUX</p>
                    <ul>
                        <li id="ContDesc">Facebook : <a href="https://www.facebook.com/pcstoremaroc/">https://www.facebook.com/pcstoremaroc/</a></li>
                        <li id="ContDesc">Instagram : <a href="https://www.instagram.com/pcstore.ma/">https://www.instagram.com/pcstore.ma/</a></li>
                    </ul>

                </div>
                <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.9587902223566!2d-5.824021989070363!3d35.7763886246271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c79ad51c210f1%3A0xa5c84eb11b5a6add!2sAfrica%20Gaming%20Store!5e0!3m2!1sen!2sma!4v1709802525075!5m2!1sen!2sma"
                    width="550"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
                </div>
            </div>
        </div>
    )
}