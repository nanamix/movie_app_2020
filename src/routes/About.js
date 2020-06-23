import React from 'react';

function About(props) {
    // return <span>About this page: I built it because I love music</span>
    console.log(props);
    
    return (
        <div className="about__container">
            <span>
                "Freedom is thre freedom to say that two plus two make four. If that is granted, all else follows"
            </span>
            <span>
                - George Orwell, 1984
            </span>
        </div>
    );
}

export default About;