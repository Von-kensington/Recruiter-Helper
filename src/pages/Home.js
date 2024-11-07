import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            {/* Header Section */}
            <header>
                <h1>Welcome to Tech Job Matcher</h1>
                <p>Your personalized platform for finding the perfect tech job match.</p>
                <Link to="/jobs">
                    <button>Explore Jobs</button>
                </Link>
                <Link to="/profile">
                    <button>Create Profile</button>
                </Link>
            </header>

            {/* About Section */}
            <section>
                <h2>About Us</h2>
                <p>
                    At Tech Job Matcher, we specialize in matching tech professionals with roles that suit
                    their unique skills and career goals. Using AI, we analyze your resume, skills, and experience to
                    provide you with targeted job matches in the technology industry.
                </p>
            </section>

            {/* How It Works Section */}
            <section>
                <h2>How It Works</h2>
                <div>
                    <h3>Step 1: Create Your Profile</h3>
                    <p>Build a detailed profile by uploading your resume and adding your key skills and experience.</p>
                </div>
                <div>
                    <h3>Step 2: Get Job Recommendations</h3>
                    <p>Our AI-powered system matches you with jobs that best fit your profile and career goals.</p>
                </div>
                <div>
                    <h3>Step 3: Apply Directly</h3>
                    <p>Apply to your matched jobs directly through the platform and keep track of your applications.</p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section>
                <h2>What Our Users Say</h2>
                <div>
                    <blockquote>
                        “Tech Job Matcher helped me find a job that matched my skills perfectly. The AI recommendations were spot-on!” - Alex, Software Developer
                    </blockquote>
                </div>
                <div>
                    <blockquote>
                        “I saved so much time finding relevant roles. The platform’s recommendations took my profile to the next level!” - Maria, Data Analyst
                    </blockquote>
                </div>
            </section>

            {/* Call to Action Section */}
            <section>
                <h2>Ready to Find Your Perfect Job?</h2>
                <p>
                    Whether you're just starting out or looking for your next big opportunity, Tech Job Matcher
                    has the resources and connections you need.
                </p>
                <Link to="/profile">
                    <button>Get Started</button>
                </Link>
            </section>
        </div>
    );
};

export default Home;
