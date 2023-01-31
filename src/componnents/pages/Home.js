import React from "react";

export default function Home() {
    return (
        <div
            style={{
                backgroundColor: "#415a77",
                color: "#e0e1dd",
            }}>
            <h1 class="mx-auto" style={{
                width: "400px"
            }}>About Me</h1>
            <div class="m-3 p-3" style={{
                color: "#e0e1dd",
                backgroundColor: "#1b263b",
                fontSize: "x-large",

            }}>
                <p>
                    Hello My name is Andrew Randolph. I am a 25 year old Full Stack Web Developer from Lubbock, Texas. I completed a 6 month bootcamp
                    through SMU to achieve my certification. In this bootcamp I learned such languages as JavaScript, CSS, HTML, React, and JSX, as well as database languages
                    like mySQL2, mongoDB, and ApolloQL. I have experience in node, jest, express, and many other web development programs. I worked on three collaborative projects
                    with classmates where I had the role of delegating and pushing my teammates to learn and achieve what they did not think they could. My three collaborative projects
                    were a media suggester where a user would choose between a Spotify and Youtube link. The user would then be greeted by a dropdown input with different preset playlist
                    genres, and they would choose which genre to fit their mood at the current moment. Then, after clicking the submit button a dynamically generated table would fill below the prompt,
                    and then the user could click a row from the table that would display video count, thumbnail/coverart, creator of the playlist, and the name or title of the playlist.
                </p>
            </div>
            <footer className="card mx-auto m-3 p-3" style={{
                backgroundColor: "#edf2f4",
                width: "400px",
                
            }}>
                <p className="mx-auto">
                    <a href="https://www.linkedin.com/in/andrew-randolph-711151192/" rel="nofollow noreferrer">
                        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" style={{
                            height: "100px",
                            width: "100px"
                             }}/> 
                    </a> &nbsp;
                    <a href="https://github.com/Andrewjr98" rel="nofollow noreferrer">
                        <img src="https://toppng.com/uploads/preview/github-logo-transparent-11659780111lim6tyk2io.png" alt="github" style={{
                            height: "100px",
                            width: "100px"
                             }}/>
                    </a>
                    <a href="https://stackoverflow.com/users/21101459/andrewjr98" rel="nofollow noreferrer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" alt="stackoverflow" style={{
                            height: "100px",
                            width: "100px"
                            }}/> 
                    </a>
                </p>
            </footer>
        </div>


    )
}