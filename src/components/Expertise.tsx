import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    ".NET",
    "C#",
    "SQL",
    "PostgreSQL",
    "React",
    "TypeScript/JavaScript",
    "Flask/Django",
    "Python",
    "REST APIs"
];

const labelsSecond = [
    "AWS",
    "Git",
    "Azure DevOps",
    "Terraform",
    "CI/CD",
    "Infrastructure as Code",
    "IAM",
    "S3",
    "SQS",
    "RDS",
    "Lambda",
    "Glue",
    "CloudFormation"
];

const labelsThird = [
    "SQL",
    "PostgreSQL",
    "SQL Server",
    "Databricks",
    "PowerBI"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Building modern web applications using React and .NET/Python APIs. Experienced designing RESTful services, integrating secure backend workflows, and managing stateful frontends.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAws} size="3x"/>
                    <h3>Cloud & Infrastructure</h3>
                    <p>Designing and deploying cloud-native systems on AWS using Terraform and CI/CD pipelines. Focused on scalable infrastructure, automation, and environment consistency.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrosoft} size="3x"/>
                    <h3>Data Integration & Analysis</h3>
                    <p>Designing and implementing SQL-driven data workflows to integrate, transform, and analyze data across systems. Experienced in building ingestion processes, integrating disparate data sources, and leveraging structured data to support reporting and business decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;