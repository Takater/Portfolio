import React from 'react'
import Study from './Study'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Education () {

    let coursesCount

    function NewLine(text) {
        coursesCount = text.split('\n').length
        return text.split('\n').map((str, index) => <span key={index}>• {str}<br /><br /></span>);
    }

    return (
        <div id="education">
            <h2>Education</h2>
            <div className="carouselStyle">
            <Carousel
                width="75%"
                centerMode={true}
                centerSlidePercentage="100"
                showIndicators={false}
                statusFormatter={(currentItem, total) => currentItem + "/" + total}
                showThumbs={false}
            >
                <Study
                    course="Software Engineering"
                    school="UNICESUMAR"
                    start="Jan/2022"
                    end="Currently"
                    description="Bachelor's degree in Software Engineering, currently on Semester 2 out of 8."
                />
                <Study
                    course="The Complete 2022 Web Development Bootcamp"
                    certificate="https://ude.my/UC-b15288ae-0e5c-4a74-8032-c473a266f8bd/"
                    school="Udemy (Dr. Angela Yu)"
                    start="Apr/2022"
                    end="May/2022"
                    description="Complete Web Development course. Nearly 65 hours of video lessons, practical examples of Web Applications, and updated content
                    for the year of 2022. Skills developed: HTML, CSS, JavaScript, Node.js, React.js, MySQL, MongoDB, Web 3.0 (Blockchain, Crypto, NFT, and ICP)."
                />
                <Study
                    course="Cs50x"
                    certificate="https://cs50.harvard.edu/certificates/e9cbeaa7-318f-4507-b927-99ae52caeac1"
                    school="HarvardX"
                    start="Jan/2022"
                    end="Mar/2022"
                    description="Introduction to Computer Science course, including 28 hours of video lessons, 9 problem sets, and one final project.
                    Involving about 120 hours amongst theory and practice. Skills developed: HTML, CSS, JavaScript, C, Python, SQLite, and Flask."
                />
                <Study
                    school="Udemy, Fundação Bradesco"
                    description={NewLine("Introduction To Project Management (10 hours) — Fundação Bradesco\n" +
                    "Introduction To Object-Oriented Programming (5 hours) — Fundação Bradesco\n" +
                    "Mathematics, Probability & Statistics for Machine Learning (14 hours) — Udemy (PhD Donatus Obomighie)\n" +
                    "Complete UiPath RPA Developer Course (11 hours) — Udemy (Leon Petrou)")}
                    // eslint-disable-next-line
                    course={"Short Courses " + "[" + coursesCount + "]"}
                />
            </Carousel>
            </div>
        </div>
    );
}

export default Education;