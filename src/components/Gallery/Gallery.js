import React from 'react';
import galleryBanner from "../../assests/gallery-page-banner.jpg";
import { AiFillHome } from 'react-icons/ai';
import p1 from "../../assests/product-door-1.png";
import p2 from "../../assests/product-door-2.png";
import './Gallery.css';
import { useNavigate } from 'react-router-dom';

export const Gallery = () => {
    const navigate = useNavigate();
    const images = [p1, p2, p1, p2, p1, p2, p1, p2, p1];

    return (
        <div className="gallery-page-wrapper">
            {/* Banner Section */}
            <div className="gallery-page-banner">
                <img src={galleryBanner} alt="Gallery Banner" />

                <div className="gallery-page-banner-heading">Gallery
                    <div className="gallery-page-breadcrumb-line">
                        <AiFillHome
                            className="home-icon"
                            onClick={() => navigate("/")}
                            style={{ cursor: "pointer" }}
                        /> / <span>Gallery</span>
                    </div>
                </div>

            </div>

            {/* Floating Section */}
            <div className="gallery-floating-section">
                <div className="gallery-orange-bg">
                    <h2 className="text-center mt-5">Build Great Products</h2>
                    <p className="text-center fw-5 gallery-para-section mb-0">
                        At SR STEEL DOORS, every piece of door furniture is crafted with precision, using top-grade materials and cutting-edge techniques. Whether you're renovating your home or completing a new build, our products are designed to provide lasting elegance and functionality.
                    </p>
                </div>

                {/* Image Grid */}
                <div className="gallery-image-grid-wrapper">
                    <div className="image-grid">
                        {images.map((src, index) => (
                            <div className="image-box" key={index}>
                                <img src={src} alt={`Gallery ${index + 1}`} loading="lazy" />
                                <div className="image-caption">Gallery {index + 1}</div> {/* Always visible */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Gallery