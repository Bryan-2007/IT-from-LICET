import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

const pages = [
    { path: '/', label: 'Home', key: 'home' },
    { path: '/about', label: 'About', key: 'about' },
    { path: '/services', label: 'Services', key: 'services' },
    { path: '/achievements', label: 'Achievements', key: 'achievements' },
    { path: '/faculty', label: 'Faculty', key: 'faculty' }
];

const getPageFromPath = () => {
    const currentPath = window.location.pathname;
    return pages.find((page) => page.path === currentPath)?.key || 'home';
};

// Navbar component
const Navbar = ({ currentPage, onNavigate }) => {
    return (
        <nav className="navbar">
            <a className="logo" href="/" onClick={(event) => onNavigate(event, '/')}>
                <span className="logo-main">IT</span> <span className="logo-sub">OF LICET</span>
            </a>
            
            <ul className="nav-links">
                {pages.map((page) => (
                    <li key={page.key}>
                        <a
                            className={currentPage === page.key ? 'active-link' : ''}
                            href={page.path}
                            onClick={(event) => onNavigate(event, page.path)}
                        >
                            {page.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Film Reel component with old film effect
const FilmReel = ({ isOpen, onClose }) => {
    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        fetch('/images.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Unable to load image list');
                }

                return response.json();
            })
            .then((data) => {
                const loadedImages = data.images || [];
                const images = Array.from({ length: 45 }, (_, i) => ({
                    id: i,
                    src: loadedImages.length ? `/images/${loadedImages[i % loadedImages.length]}` : null,
                    row: Math.floor(i / 15) + 1
                }));

                setImageList(images);
            })
            .catch((error) => {
                console.error('Error loading images:', error);
                setImageList(Array.from({ length: 45 }, (_, i) => ({
                    id: i,
                    src: null,
                    row: Math.floor(i / 15) + 1
                })));
            });
    }, []);

    const row1 = imageList.filter(img => img.row === 1);
    const row2 = imageList.filter(img => img.row === 2);
    const row3 = imageList.filter(img => img.row === 3);

    const ImageFrame = ({ imageSrc }) => {
        if (imageSrc) {
            return <img className="film-frame-image" src={imageSrc} alt="Department event" />;
        }

        return <div className="image-frame"></div>;
    };

    return (
        <div id="film-reel" className={`film-reel-section ${isOpen ? 'film-reel-open' : ''}`}>
            {/* Old film overlay effect */}
            <div className="film-overlay"></div>
            
            {/* Film reel container */}
            <div className="film-reel-container">
                {/* Row 1: Scroll Left to Right */}
                <div className="film-row row-1">
                    <div className="film-scroll-track">
                        {row1.map((img) => (
                            <div key={`row1-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                        {row1.map((img) => (
                            <div key={`row1-dup-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Scroll Right to Left */}
                <div className="film-row row-2">
                    <div className="film-scroll-track">
                        {row2.map((img) => (
                            <div key={`row2-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                        {row2.map((img) => (
                            <div key={`row2-dup-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Scroll Left to Right */}
                <div className="film-row row-3">
                    <div className="film-scroll-track">
                        {row3.map((img) => (
                            <div key={`row3-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                        {row3.map((img) => (
                            <div key={`row3-dup-${img.id}`} className="film-image">
                                <ImageFrame imageSrc={img.src} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Film grain and scratches */}
            <div className="film-grain"></div>
            <div className="film-scratches"></div>
            <div className="film-dust"></div>
            <button className="film-close-button" type="button" onClick={onClose} aria-label="Close photo display">
                Close
            </button>
        </div>
    );
};

// Hero section component
const Hero = () => {
    // State to manage film reel visibility
    const [showFilmReel, setShowFilmReel] = useState(false);

    // Handle button click with smooth scroll
    const handleClickHere = () => {
        setShowFilmReel(true);
        // Use setTimeout to ensure DOM updates before scrolling
        setTimeout(() => {
            const filmReelElement = document.getElementById('film-reel');
            if (filmReelElement) {
                filmReelElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }, 50);
    };

    return (
        <>
            <section className="hero" id="home">
                <h1>The Department of Information Technology</h1>
                <p><strong>Proudly Presents</strong></p>
                <p>Empowering the next generation of technology leaders at LICET with cutting-edge skills and industry expertise</p>
                <button className="cta-button" onClick={handleClickHere}>Click Here!</button>
                <button className="cta-button">Contact Us</button>
            </section>
            <FilmReel isOpen={showFilmReel} onClose={() => setShowFilmReel(false)} />
        </>
    );
};

// About section component
const About = () => {
    const labs = [
        { name: "Programming Lab", venue: "IT Department Lab" },
        { name: "Networks Lab", venue: "IT Department Lab" },
        { name: "Data Science Lab", venue: "IT Department Lab" },
        { name: "Project Lab", venue: "IT Department Lab" }
    ];

    return (
        <>
            <section className="about" id="about">
                <h2>About Us</h2>
                <p>
                    The Information Technology (IT) Department at Loyola-ICAM College of Engineering and Technology (LICET)
                    was founded in 2010. It was established alongside the college itself, which was founded through a joint
                    venture between the Loyola College Society and ICAM, France. The department was created to provide
                    technical education focusing on bridging the gap between academia and industry.
                </p>

                <div className="vision-mission">
                    <div>
                        <h3>Vision</h3>
                        <p>
                            To build proficient Information Technologists through moral, ethical, and technological standards
                            for the societal well-being.
                        </p>
                    </div>
                    <div>
                        <h3>Mission</h3>
                        <ul>
                            <li><strong>M1:</strong> Offering practical, contemporary IT education for societal benefit.</li>
                            <li><strong>M2:</strong> Cultivating career-ready, ethical professionals with entrepreneurial skills for emerging technologies.</li>
                            <li><strong>M3:</strong> Fostering global, industry-aligned partnerships for mutual growth.</li>
                            <li><strong>M4:</strong> Encouraging innovative, interdisciplinary research.</li>
                        </ul>
                        <p>
                            These objectives align with LICET's broader goal of forming socially responsible engineers.
                        </p>
                    </div>
                </div>
            </section>

            <section className="kpi-dashboard" aria-labelledby="kpi-title">
                <div className="kpi-header">
                    <p>15+ years of excellence</p>
                    <h2 id="kpi-title">Performance Dashboard</h2>
                </div>

                <div className="kpi-grid">
                    <div className="kpi-card placement-card">
                        <h3>Placements to Companies</h3>
                        <p className="kpi-caption">Last 3 years and overall placement rate</p>
                        <div className="placement-chart-wrap">
                            <div className="placement-chart" aria-label="Placement rate chart">
                                <span>Update %</span>
                            </div>
                            <div className="chart-legend">
                                <span><i className="legend-dot placed"></i>Placed students</span>
                                <span><i className="legend-dot pending"></i>Higher studies / in progress</span>
                            </div>
                        </div>
                    </div>

                    <div className="kpi-card student-card">
                        <h3>Total IT Students</h3>
                        <p className="student-count">Update</p>
                        <p className="kpi-caption">Students across all 4 years</p>
                    </div>

                    <div className="kpi-card labs-card">
                        <h3>IT Labs & Venues</h3>
                        <div className="labs-list">
                            {labs.map((lab) => (
                                <div className="lab-item" key={lab.name}>
                                    <span>{lab.name}</span>
                                    <strong>{lab.venue}</strong>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
// Services section component
const Services = () => {
    const servicesData = [
        {
            title: "Software Development",
            description: "Advanced training in modern programming languages, frameworks, and development methodologies"
        },
        {
            title: "AI & ML",
            description: "Comprehensive programs in machine learning, deep learning, and AI applications"
        },
        {
            title: "IOT",
            description: "Hands-on experience with Azure, AWS, and GCP platforms for scalable solutions"
        },
        {
            title: "Fullstack Development",
            description: "Industry-standard security practices and ethical hacking certifications"
        },
        {
            title: "Data Science and Analysis",
            description: "Analytics and big data processing for business intelligence and insights"
        },
        {
            title: "Web Development",
            description: "Full-stack development with modern technologies and responsive design principles"
        }
    ];

    return (
        <section className="services" id="services">
            <h2>Our Services & Programs</h2>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div key={index} className="service-card">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Stats section component
const Stats = () => {
    return (
        <section className="stats">
            <h2>Our Achievements</h2>
            <div className="stats-container">
                <div className="stat-item">
                    <h4>500+</h4>
                    <p>Successful Placements</p>
                </div>
                <div className="stat-item">
                    <h4>95%</h4>
                    <p>Student Satisfaction</p>
                </div>
                <div className="stat-item">
                    <h4>50+</h4>
                    <p>International Recognition</p>
                </div>
                <div className="stat-item">
                    <h4>20+</h4>
                    <p>Industry Partners</p>
                </div>
            </div>
        </section>
    );
};

// Team section component
const Team = () => {
    const facultyData = [
        {
            name: "Mr. Marshal Mano",
            role: "Professor of WE"
        },
        {
            name: "Prof. Sherill Sophie Maria Vincent",
            role: "AI & ML Specialist"
        },
        {
            name: "Prof. Juliana",
            role: "Cloud Architecture Expert"
        },
        {
            name: "Dr. Laila K",
            role: "Cybersecurity Lead"
        },
        {
            name: "Prof. Sylvia Irish",
            role: "Full stack Development Lead"
        },
        {
            name: "Prof. Deepa",
            role: "Data Science Expert"
        }
    ];

    return (
        <section className="team" id="team">
            <h2>Faculty & Leadership</h2>
            <div className="team-container">
                {facultyData.map((member, index) => (
                    <div key={index} className="team-card">
                        <h3>{member.name}</h3>
                        <p>{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Footer component
const Footer = ({ currentPage, onNavigate }) => {
    return (
        <footer>
            <h3>LICET - Information Technology Department</h3>
            <ul className="footer-links">
                {pages.map((page) => (
                    <li key={page.key}>
                        <a
                            className={currentPage === page.key ? 'active-link' : ''}
                            href={page.path}
                            onClick={(event) => onNavigate(event, page.path)}
                        >
                            {page.label}
                        </a>
                    </li>
                ))}
            </ul>
            <p>&copy; 2024 LICET IT Department. All rights reserved.</p>
            <p>Empowering Tomorrow's Technology Leaders</p>
        </footer>
    );
};

const PageContent = ({ currentPage }) => {
    switch (currentPage) {
        case 'about':
            return <About />;
        case 'services':
            return <Services />;
        case 'achievements':
            return <Stats />;
        case 'faculty':
            return <Team />;
        case 'home':
        default:
            return <Hero />;
    }
};

// Main App component
function App() {
    const [currentPage, setCurrentPage] = useState(getPageFromPath);

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPage(getPageFromPath());
            window.scrollTo({ top: 0, behavior: 'auto' });
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const handleNavigate = (event, path) => {
        event.preventDefault();

        if (window.location.pathname !== path) {
            window.history.pushState({}, '', path);
        }

        setCurrentPage(getPageFromPath());
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
            <main className="page-content">
                <PageContent currentPage={currentPage} />
            </main>
            <Footer currentPage={currentPage} onNavigate={handleNavigate} />
            <Analytics />
        </>
    );
}

export default App;

