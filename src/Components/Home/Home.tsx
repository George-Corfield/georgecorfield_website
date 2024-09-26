import React, { useState } from "react";

function Home() {

    const [activeTab, setActiveTab] = useState('skills');

    const renderTab = () => {
        switch(activeTab) {
            case "skills":
                return (<div className="tab-content">
                            <div className="section">
                                <div className="headings">
                                    <h4>Techincal:</h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><span><strong>Languages:</strong> Java, C, Python, Golang, Haskell, C++, Javascript</span></li>
                                        <li><span><strong>Frameworks:</strong> React, Angular, Springboot</span></li>
                                        <li><span><strong>Cloud Technology:</strong> AWS, Microsoft Azure, MongoDB Atlas</span></li>
                                        <li><span><strong>Development Methodology:</strong> Agile, Distributed Systems, Waterfall</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section">
                                <div className="headings">
                                    <h4>Transferable:</h4>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><span>Leadership</span></li>
                                        <li><span>Communication</span></li>
                                        <li><span>Time Management</span></li>
                                        <li><span>Problem Solving</span></li>
                                        <li><span>Organisation</span></li>
                                        <li><span>Collaboration</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>);
            case "education":
                return (<div className="tab-content">
                            <div className="section">
                                <div className="headings">
                                    <h4>University of Bristol</h4>
                                    <h6>Computer Science | 2022 - 2025 </h6>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><span>Predicted 1st</span></li>
                                        <li><span>Received 80% for a Java coursework in first year, followed by 78% in a software Engineering project in 2nd year</span></li>
                                        <li><span>On top of this, I have received scores of 98% in Security, 87% in Programming Languages, and 76% in a distributed golang coursework</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section">
                                <div className="headings">
                                    <h4>Berkhamsted Sixth Form</h4>
                                    <h6>Physics, Computer Science, Mathematics, Further Mathematics | 2020 - 2022 </h6>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><span>4 A*s achieved in all subjects, scoring in the top 50 in the UK for computer science</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="section">
                                <div className="headings">
                                    <h4>Berkhamsted Boys School</h4>
                                    <h6>IGCSE's | 2018 - 2020 </h6>
                                </div>
                                <div className="content">
                                    <ul>
                                        <li><span>8 9's and 2 8's, with an A in a FSMQ Additional Mathematics</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>);
            case "awards":
                return (<div className="tab-content">
                            <div className="section">
                                <ul>
                                    <li><span>Top 10 Computer Science student in 2nd year at the University of Bristol</span></li>
                                    <li><span>Runner-up in Tesco's intern hackathon, with the team receiving an award for most complex entry</span></li>
                                    <li><span>Competed and made progress in multiple Google Codejam's and Kickstarts</span></li>
                                </ul>
                            </div>
                        </div>);
            default:
                return null;
        }
    };

    return(
        <div className="home page">
            <div className="headings">
                <div>
                    <span className="topHeading">Hello, I'm George.</span>
                </div>
                <div>
                    <span className="subHeading">Computer Science Student & Experienced software engineer.</span>
                </div>
            </div>
            <div className="content">
                <span className="subHeading">About Me.</span>
                <span className="text">
                    I come from a small village outside of London called Kensworth, I have since moved to Bristol to study Computer Science
                    at the University of Bristol. I have various experiences in software engineering, my most recent being at Tesco
                    where I worked in their promotional department. Outside of this is, I have completed numerous projects which showcase my 
                    knowledge in Machine Learning, Ai, and working on distributed systems. I am looking forward to using these skills in 
                    a corporate setting.
                </span>
                <div className="tabs-and-contact">
                    <div>
                        <div className="tabs">
                            <p
                                className={`tab-button ${activeTab === 'skills' ? "active" : ""}`}
                                onClick={() => setActiveTab("skills")}
                            >
                                Skills
                            </p>
                            <p
                                className={`tab-button ${activeTab === "education" ? "active" : ""}`}
                                onClick={() => setActiveTab("education")}
                            >
                                Education
                            </p>
                            <p
                                className={`tab-button ${activeTab === "awards" ? "active" : ""}`}
                                onClick={() => setActiveTab("awards")}
                            >
                                Awards
                            </p>
                        </div>
                        <div className="tab-content">
                            {renderTab()}
                        </div>
                    </div>
                    <div>
                        <div className="headings">
                            <span className="subHeading">Contact Me.</span>
                        </div>
                        <div className="external-links">
                            <a href="mailto:gacorfield50@gmail.com"><img src="/email.svg" />Email</a>
                            <a href="https://github.com/George-Corfield" target="_blank"><img src="/github-mark.svg" />Github</a>
                            <a href="https://www.linkedin.com/in/george-corfield-5a39681ba/" target="_blank"><img src="/linkedIn.svg" />LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;