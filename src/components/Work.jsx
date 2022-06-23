import React from 'react'
import Job from './Job'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function Work () {
    return (
        <div id="work-experience">
            <h2>Work Experience</h2>
            <div className="carouselStyle">
            <Carousel
                width="75%"
                centerMode={true}
                centerSlidePercentage="100"
                showIndicators={false}
                statusFormatter={(currentItem, total) => currentItem + "/" + total}
                showThumbs={false}
            >
            <Job
                position="HR Assistant"
                company="Grupo Rovema"
                duration="Aug/21 - Currently (10 months)"
                description="Assistance in recruitment and selection processes:
                scheduling interviews, applying Excel tests and providing feedback
                for basic and intermediate levels; Automation development for HR 
                processes. Using VBA with Macro-enabled Excel sheets and RPA 
                development with UiPath and VB .Net"
            />
            <Job
                position="English Teacher"
                company="Minds English School"
                duration="Apr/18 - Dec/18 (8 months)"
                description="Teaching of English Language and application of
                exams for students of different levels and ages;
                Follow the methodology and lesson plan established
                by the institution and its daily schedule; Grade exams,
                essays and be prepared for classes of any units from any of the books
                books."
            />
            <Job
                position="Administrative Assistant"
                company="JR Rabelo & Oliveira Telecomunicações"
                duration="Sep/15 - Apr/16 (7 months)"
                description="Tele sales audition: make sure sales of different
                subscriptions plans (phone, internet, and cable TV) were
                correctly made by the salespeople; Clients must be aware of
                all relevant information and aspects of the contract.
                Avoid withdrawals in cases of omitted or divergent information;
                Track customers payment reports and contact them
                before due date to prevent default."
            />
            <Job
                position="English Teacher"
                company="Fisk Escola de Idiomas"
                duration="Dec/13 - Apr/14 (4 months)"
                description="Teaching of English Language and application of
                exams for students in different levels and ages at 3
                school units. Being at the school to prepare classes
                and possibly assist students and/or guardians."
            />
            <Job
                position="Computer Systems Operator"
                company="Dental Norte Assistência Odontológica Ltda"
                duration="Mar/12 - Jan/13 (10 months)"
                description="Monitoring and recording dental procedures performed
                by accredited dentists. Digitization of forms, procedure
                authorizations, x-ray images, and patient reports"
            />
            </Carousel>
            </div>
        </div>
    );
}

export default Work;