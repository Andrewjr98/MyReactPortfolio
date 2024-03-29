import React from "react";

export default function Skills() {
    return (
        <div className="d-flex align-items-start" style={{
            color: "#eoe1dd",
            backgroundColor: "#1b263b"
        }}>
            <h1
            >Skills</h1>
            <ol className="list-group list-group-numbered" style={{
                width: "1000px",
                margin: "20px"
            }}>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Computer Skills</div>
                        I have worked with computers all my life. 
                        Whether it was building PC's for friends and myself, small problems around my parents house, or helping my coworkers fix their computer issues. 
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">CSS</div>
                        I have been working with CSS and CSS frameworks for about a year now. I started using CSS in my Full Stack Web Development bootcamp. I have used frameworks such as bootstrap, Materialize, tailwind, and Bulma.
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">HTML</div>
                        I also started using HTML about a year ago in my aforementioned bootcamp. Whether accompanied by React or Angular as well as writing raw HTML for all of my projects.  
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">Git</div>
                        I have been an avid user of Github, Git, and GitLab for about a year now. I started using these just before my bootcamp and have been very active on these platforms. I am very big fan of the project management that GitHub offers and the ability to delegate tasks to other colleagues/coworkers. As well as the ease of uploading and updating new projects through Powershell or Git.
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">React</div>
                        React is My strongest skill. I worked a lot with this and GraphQL as well as Apollo to build my resume as well as a web forum. It cuts down on a lot of time and I loved working with it. 
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">JavaScript</div>
                        JavaScript is one of my strongest skills and I love using it to build applications and websites. The ease of adapting to API's, Node's, and Databases makes it very easy and simple to use. 
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">MySQL</div>
                        One of my stronger Skills MySQL is the source database for a third of my projects. It took me a while to get the hold of this database, but I can say that I have sufficiently learned to use this relational database effectively. 
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">APIs</div>
                        I have used APIs for almost all of my projects. Working with APIs can be a little difficult just based on how the API is formed and what can and cannot be used. However, I have worked with Youtube/Google and Spotify APIs to successfully build an application called Media Suggestor.
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">MongoDB</div>
                        MongoDB is my favorite database lanaguage to use. It makes everything connecting everything a lot easier and is the database I go to most often.
                    </div>
                    <span className="badge bg-primary rounded-pill"></span>
                </li>
            </ol>
        </div>
    )
}