import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ImageHolder } from '..';
import * as Asset from "../../assets"
import {FaReact, FaCss3Alt, FaHtml5, FaBootstrap,FaNode,FaLock} from "react-icons/fa";
import {SiNestjs, SiMysql,SiMongodb,SiHandlebarsdotjs,SiExpress} from "react-icons/si";
import styles from "./ProjectCard.module.css";

const assets = {
    "Weather Api": <ImageHolder primarySource={Asset.PerpetualCrusades} secondarySource={Asset.FallbackPerpetualCrusades} alt="Weather Api" className="card-img"/>,
    "Bloggers Tube": <ImageHolder primarySource={Asset.ProjectURefer} secondarySource={Asset.FallbackProjectURefer} alt="Bloggers Tube" className="card-img"/>,
    "Dictionary Hub": <ImageHolder primarySource={Asset.HackUMassWebsite} secondarySource={Asset.FallbackHackUMassWebsite} alt="Dictionary Hub" className="card-img"/>,
    "Project Cherish": <ImageHolder primarySource={Asset.Cherish} secondarySource={Asset.FallbackCherish} alt="Project Cherish" className="card-img"/>,
    "IOT Based Security Door Lock System": <ImageHolder primarySource={Asset.Iot} secondarySource={Asset.FallbackIot} alt="IOT" className="card-img"/>,
    "Fithub": <ImageHolder primarySource={Asset.Fithub} secondarySource={Asset.FallbackFithub} alt="Fithub" className="card-img"/>,
}

const icons = {
    "React": <FaReact className={styles.icon} style={{color: "#61DAFB"}}/>,
    "CSS": <FaCss3Alt className={styles.icon} style={{color: "#1572B6"}}/>,
    "HTML": <FaHtml5 className={styles.icon} style={{color: "#E34F26"}}/>,
    "Bootstrap": <FaBootstrap className={styles.icon} style={{color: "#7952B3"}}/>,
    "NestJS": <SiNestjs className={styles.icon} style={{color: "#E0234E"}}/>,
    "MySQL": <SiMysql className={styles.icon} style={{color: "#4479A1"}}/>,
    "MongoDB": <SiMongodb className={styles.icon} style={{color: "#000"}}/>,
    "Node": <FaNode className={styles.icon} style={{color: "#4479A1"}}/>,
    "HBS": <SiHandlebarsdotjs className={styles.icon} style={{color: "#000"}}/>,
    "Express": <SiExpress className={styles.icon} style={{color: "#4479A1"}}/>,    
    "IOT": <FaLock className={styles.icon} style={{color: "#000"}}/>,    
}

const ProjectCard = (props) => {
    return (
        <Card className={styles.container}>
            {assets[props.title]}
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.techStack.map((tech, index) => icons[tech])}
                </Card.Text>
                <Card.Text>
                    {props.content}
                </Card.Text>
                {props.liveUrl ? <Button className={styles.button} variant="primary" href={props.liveUrl} target="_blank">View Live</Button> : null}
                {props.gitHubUrl ? <Button className={styles.button} variant="dark" href={props.gitHubUrl} target="_blank">View on GitHub</Button> : null}
            </Card.Body>
        </Card>
    )
}

export default ProjectCard;