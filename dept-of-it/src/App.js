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
                <img className="logo-image" src="/licet-logo.png" alt="LICET logo" />
                <span className="logo-text">
                    <span className="logo-main">IT</span> <span className="logo-sub">OF LICET</span>
                </span>
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

// Modern cinematic gallery component
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
                const uniqueImages = Array.from(new Set(data.images || []));
                setImageList(uniqueImages.map((imageName, index) => ({
                    id: imageName,
                    src: `/images/${imageName}`,
                    title: `Department moment ${index + 1}`
                })));
            })
            .catch((error) => {
                console.error('Error loading images:', error);
                setImageList([]);
            });
    }, []);

    return (
        <div id="film-reel" className={`film-reel-section ${isOpen ? 'film-reel-open' : ''}`}>
            <div className="gallery-shell">
                <div className="gallery-header">
                    <div>
                        <p>Department Gallery</p>
                        <h2>Moments from LICET IT</h2>
                    </div>
                    <button className="film-close-button" type="button" onClick={onClose} aria-label="Close photo display">
                        Close
                    </button>
                </div>

                <div className="cinematic-gallery" aria-label="Department photo gallery">
                    {imageList.map((image) => (
                        <figure className="gallery-frame" key={image.id}>
                            <img src={image.src} alt={image.title} />
                        </figure>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Hero section component
const Hero = () => {
    // State to manage film reel visibility
    const [showFilmReel, setShowFilmReel] = useState(false);
    const [showContactOverlay, setShowContactOverlay] = useState(false);

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
                <button className="cta-button" onClick={() => setShowContactOverlay(true)}>Contact Us</button>
            </section>
            {showContactOverlay && (
                <div className="contact-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-title">
                    <div className="contact-card">
                        <button
                            className="contact-close-button"
                            type="button"
                            onClick={() => setShowContactOverlay(false)}
                            aria-label="Close contact information"
                        >
                            x
                        </button>
                        <h2 id="contact-title">Contact Us</h2>
                        <div className="contact-details">
                            <p><span aria-hidden="true">📧</span> info@licet.ac.in</p>
                            <p><span aria-hidden="true">📞</span> +91-44-28178490</p>
                            <p><span aria-hidden="true">📍</span> Nungambakkam, Chennai</p>
                        </div>
                    </div>
                </div>
            )}
            <FilmReel isOpen={showFilmReel} onClose={() => setShowFilmReel(false)} />
        </>
    );
};

// About section component
const About = () => {
    const classroomVenues = [
        { name: "IT 1st yr", venue: "D31" },
        { name: "IT 2nd yr", venue: "I33" },
        { name: "IT 3rd yr", venue: "I32" },
        { name: "IT 4th yr", venue: "I31" }
    ];

    const labs = [
        { name: "RDBMS Lab", venue: "A21" },
        { name: "Data Science Lab", venue: "A22" },
        { name: "Programming Lab", venue: "A23" }
    ];

    const latestAchievements = [
        "Prof. Sherill Sophie Maria Vincent completed PhD on AI-driven learning systems",
        "2nd year Abhishek won $2000 at ETHGlobal 2026"
    ];

    return (
        <>
            <section className="about" id="about">
                <div className="about-page-title">
                    <h1>DEPARTMENT OF INFORMATION TECHNOLOGY</h1>
                    <p>LOYOLA ICAM COLLEGE OF ENGINEERING &amp; TECHNOLOGY</p>
                </div>
                <h2>About Us</h2>

                <p>
                    The Information Technology (IT) Department at Loyola-ICAM College of Engineering and Technology (LICET)
                    was founded in 2010. It was established alongside the college itself, which was founded through a joint
                    venture between the Loyola College Society and ICAM, France. The department was created to provide
                    technical education focusing on bridging the gap between academia and industry.
                </p>

                <figure className="about-image-placeholder">
                    <img src="/images/it-group.jpg" alt="LICET Information Technology department group" />
                </figure>

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
                                <span>70%</span>
                                <div className="placement-breakdown" aria-hidden="true">
                                    <span><i className="breakdown-dot breakdown-unplaced"></i>Higher studies / in progress - 30%</span>
                                    <span><i className="breakdown-dot breakdown-ibm"></i>IBM - 3%</span>
                                    <span><i className="breakdown-dot breakdown-microsoft"></i>Microsoft - 2%</span>
                                    <span><i className="breakdown-dot breakdown-cognizant"></i>Cognizant - 15%</span>
                                    <span><i className="breakdown-dot breakdown-infosys"></i>Infosys - 10%</span>
                                    <span><i className="breakdown-dot breakdown-wipro"></i>Wipro - 15%</span>
                                    <span><i className="breakdown-dot breakdown-tcs"></i>TCS - 8%</span>
                                    <span><i className="breakdown-dot breakdown-amazon"></i>Amazon - 2%</span>
                                    <span><i className="breakdown-dot breakdown-mahindra"></i>Mahindra - 9%</span>
                                    <span><i className="breakdown-dot breakdown-zoho"></i>Zoho - 6%</span>
                                </div>
                            </div>
                            <div className="chart-legend">
                                <span><i className="legend-dot placed"></i>Placed students</span>
                                <span><i className="legend-dot pending"></i>Higher studies / in progress</span>
                            </div>
                        </div>
                    </div>

                    <div className="kpi-card student-card">
                        <h3>Total IT Students</h3>
                        <div className="student-year-list" aria-label="Total IT students by year">
                            <div className="student-year-item">
                                <span>Ist year</span>
                                <strong>70</strong>
                            </div>
                            <div className="student-year-item">
                                <span>2nd year</span>
                                <strong>66</strong>
                            </div>
                            <div className="student-year-item">
                                <span>3rd year</span>
                                <strong>57</strong>
                            </div>
                            <div className="student-year-item">
                                <span>4th year</span>
                                <strong>63</strong>
                            </div>
                        </div>
                        <p className="kpi-caption">Students across all 4 years</p>
                    </div>

                    <div className="kpi-card labs-card">
                        <h3>IT Labs & Venues</h3>
                        <div className="venue-groups">
                            <div className="venue-group">
                                <h4>Classroom Venues</h4>
                                <div className="venue-list">
                                    {classroomVenues.map((classroom) => (
                                        <div className="venue-item" key={classroom.name}>
                                            <span>{classroom.name}</span>
                                            <strong>{classroom.venue}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="venue-group">
                                <h4>Labs</h4>
                                <div className="venue-list">
                                    {labs.map((lab) => (
                                        <div className="venue-item" key={lab.name}>
                                            <span>{lab.name}</span>
                                            <strong>{lab.venue}</strong>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="kpi-card achievements-card">
                        <h3>Latest Achievements</h3>
                        <div className="achievement-mini-list">
                            {latestAchievements.map((achievement) => (
                                <div className="achievement-mini-item" key={achievement}>
                                    <span>{achievement}</span>
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
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>LICET - Information Technology Department</h3>
                    <p>Empowering Tomorrow's Technology Leaders</p>
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
                </div>

                <div className="footer-contact-block">
                    <h4>Official Contact Numbers</h4>
                    <p><strong>Main College Office:</strong> +91-44-28178490</p>
                    <p><strong>Campus Reception:</strong> +91-44-28178200</p>
                    <p><strong>Admission Queries:</strong> 9003813339</p>
                    <p><strong>Placement Office:</strong> 9003825597 or 9600412506</p>
                    <p><strong>Fax:</strong> +91-44-28178493</p>
                </div>

                <div className="footer-contact-block">
                    <h4>Additional Contact Info</h4>
                    <p><strong>General Email:</strong> licet@licet.ac.in</p>
                    <p><strong>Admission Email:</strong> admissions@licet.ac.in</p>
                    <p><strong>Physical Address:</strong> LICET, Loyola Campus, Nungambakkam, Chennai - 600034.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 LICET IT Department. All rights reserved.</p>
            </div>
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

