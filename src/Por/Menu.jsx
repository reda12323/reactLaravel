import React from 'react'
import './Menu.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Menu() {
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCategoryHover = (categoryId) => {
    setHoveredCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
  };


  const categories = [
    {
      id: 1,
      name: "SetupComplet",
      route: "/category/1",
    },
    {
      id: 2,
      name: "Pc Gamer",
      route: "/category/2",
    },
    {
      id: 3,
      name: "Workstation",
      route: "/category/3",
      subcategories: [
        { id: 22, name: "Workstation AMD", route: "/subcategory/3.1" },
        { id: 23, name: "Workstation INTEL", route: "/subcategory/3.2" }
      ],
    },
    {
      id: 4,
      name: "Pc Portable",
      route: "/category/4",
      subcategories: [
        { id: 24, name: "Pc Portable Gamer", route: "/subcategory/4.1" },
        { id: 25, name: "Pc Portable Professionnel", route: "/subcategory/4.2" },
        { id: 26, name: "Pc Portable Grand Public", route: "/subcategory/4.3" }
      ],
    },
    {
      id: 5,
      name: "Composant",
      route: "/category/5",
      subcategories: [
        { id: 27, name: "Boitier", route: "/subcategory/5.1" },
        { id: 28, name: "Processeur", route: "/subcategory/5.2" },
        { id: 29, name: "Carte Mère", route: "/subcategory/5.3" },
        { id: 30, name: "Carte Graphique", route: "/subcategory/5.4" },
        { id: 31, name: "Barrette Mémoire", route: "/subcategory/5.5" },
        { id: 32, name: "Alimentation", route: "/subcategory/5.6" },
        { id: 33, name: "Extenseur PCI-E", route: "/subcategory/5.7" },
        { id: 34, name: "Refroidissement", route: "/subcategory/5.8" },
        { id: 35, name: "Câble d’alimentation", route: "/subcategory/5.9" }
      ],
    },
    {
      id: 6,
      name: "Stockage",
      route: "/category/6",
      subcategories: [
        { id: 36, name: "Disque Dur Interne", route: "/subcategory/6.1" },
        { id: 37, name: "Disque Dur Externe", route: "/subcategory/6.2" }
      ],
    },
    {
      id: 7,
      name: "Moniteur",
      route: "/category/7",
      subcategories: [
        { id: 38, name: "ASUS", route: "/subcategory/7.1" },
        { id: 39, name: "MSI", route: "/subcategory/7.2" }
      ],
    },
    {
      id: 8,
      name: "Accessoire",
      route: "/category/8",
      subcategories: [
        { id: 40, name: "Clavier Gamer", route: "/subcategory/8.1" },
        { id: 41, name: "Souris Gamer", route: "/subcategory/8.2" },
        { id: 42, name: "Casque Gamer", route: "/subcategory/8.3" },
        { id: 43, name: "Pack Gamer", route: "/subcategory/8.4" },
        { id: 44, name: "Manette", route: "/subcategory/8.5" }
      ],
    }
  ];
  
return (
    <div className="category-menu flex justify-between" onMouseLeave={handleCategoryLeave}>
        <div className='allcategories'>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
            <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
          </div>
          <div className='categories'>All Categories</div>
        </div>
    {isMenuOpen && (
      <div className="category-dropdown">
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onMouseEnter={() => handleCategoryHover(category.id)}
              onMouseLeave={handleCategoryLeave}
            >
              <Link to={category.route} onClick={() => setIsMenuOpen(false)}><span id='firstLi'>
                {category.name}</span>
              </Link>
              
              {hoveredCategory === category.id && category.subcategories && (
                <ul className="subcategory-list">
                  {category.subcategories.map((subcategory) => (
                    <li id='Mustbe' key={subcategory.id}>
                      <Link to={subcategory.route}><span id='Two'>{subcategory.name}</span></Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
)
}
