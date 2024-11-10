"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaGithub } from "react-icons/fa"; // Only use GitHub icon
import "./projects.css";
import dwell from "../../../public/dwell.webp";
import electromart from "../../../public/electromart.webp";
import resumeBuilder from "../../../public/resumeBuilder.webp";
import shopping from "../../../public/shopping.webp";
import pokemon from "../../..//public/pokemon.webp";
import todo from "../../../public/todo.webp";
import dynamicResume from "../../../public/dynaicResume.webp";

interface Product {
  id: number;
  name: string;
  image: StaticImageData | string;
  description: string;
  githubLink: string;
  liveLink: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "DWELL-House Website",
    image: dwell,
    description: "DWELL-house is a sleek, responsive platform showcasing residential architecture projects. Built with Next.js and Tailwind CSS, it offers an intuitive layout, highlighting project details and providing a seamless, visually engaging browsing experience.",
    githubLink: "https://github.com/Anousha1846/DWEll-house-website",
    liveLink: "https://anousha1846.github.io/DWEll-house-website",
  },
  {
    id: 2,
    name: "ElectoMart",
    image: electromart,
    description: "Electromart is a sleek eCommerce platform built with Next.js, TypeScript, and custom CSS, offering a responsive, intuitive interface with dynamic product listings, seamless navigation, and optimized shopping experience for electronics.",
    githubLink: "https://github.com/Anousha1846/ElectroMart",
    liveLink: "https://electro-mart-topaz.vercel.app/",
  },
  {
    id: 3,
    name: "Simple Static Resume Builder",
    image: resumeBuilder,
    description: "Simple Static Resume Builder is a user-friendly tool that enables users to create elegant resumes effortlessly. It features customizable templates, easy input forms, and a clean layout for professional presentation.",
    githubLink: "https://github.com/Anousha1846/Simple-resume-builder-1",
    liveLink: "https://anousha1846.github.io/Simple-resume-builder-1/",
  },
  {
    id: 4,
    name: "Shopping 2.0",
    image: shopping,
    description: "This eCommerce website offers a seamless shopping experience with an intuitive add-to-cart functionality. Users can easily browse products, manage their cart, and enjoy secure checkout for a hassle-free purchase process.",
    githubLink: "https://github.com/Anousha1846/Hackathon-1.2",
    liveLink: "https://anousha1846.github.io/Hackathon-1.2/",
  },
  {
    id: 5,
    name: "Pokemon Clone",
    image: pokemon,
    description: "This Pokémon clone website, developed during my CSS learning, showcases basic styling and JavaScript functionality. While unresponsive, it highlights my foundational skills in web design and interactive elements.",
    githubLink: "https://github.com/Anousha1846/Pokemon-Clone",
    liveLink: "https://anousha1846.github.io/Pokemon-Clone/",
  },
  {
    id: 6,
    name: "TO-DO App",
    image: todo,
    description: "This simple TO DO app allows users to create, manage, and delete tasks effortlessly. With a clean interface, it enhances productivity by keeping track of daily activities and priorities.",
    githubLink: "https://github.com/Anousha1846/ToDo-list",
    liveLink: "https://anousha1846.github.io/ToDo-list/",
  },
 {      id: 7, 
        name : "Dynamic Editable Resume Builder",
         image: dynamicResume ,
        description: "A user-friendly resume builder offering dynamic editing and instant downloading. Easily customize fields like contact info, education, and experience to create a polished, professional resume tailored to your needs.",
        githubLink: "https://github.com/Anousha1846/Updated-Resume-Builder-5",
        liveLink: "https://updated-resume-builder-5.vercel.app/",}
];

const ProjectPage = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const goBack = () => setSelectedProduct(null);

  return (
    <div className="container">
      {!selectedProduct ? (
        <div className="product-list">
          {products.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => handleSelectProduct(product.id)}
            >
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                layout="intrinsic"
              />
              <h3>{product.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="product-detail">
          <button onClick={goBack}>Back to Projects</button>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.name}
            width={500}
            height={350}
          />
          <h2>{selectedProduct.name}</h2>
          <p>{selectedProduct.description}</p>
          <div className="project-links">
            <h3>See The Project:</h3>
            
            <a href={selectedProduct.githubLink} target="_blank" rel="noopener noreferrer">
              <FaGithub style={{ height: 35, width: 35, color: '#000' }} />
            </a>
            <a href={selectedProduct.liveLink} target="_blank" rel="noopener noreferrer">
              <svg width="35" height="35" viewBox="0 0 76 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#000000" />
              </svg>
            </a>
          </div>
        </div>
      )}

      <br /><br /><br />
    </div>
  );
};

export default ProjectPage;
