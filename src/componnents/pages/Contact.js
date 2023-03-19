import React from "react";

export default function Contact() {
  return (
    <div className="d-flex align-items-start" style={{
      color: "#e0e1dd",
      backgroundColor: "#1b263b"
    }}>
      <h1 className="mx-auto" style={{
        width: "400px"
      }}>Contact Page</h1>
      <form>
        <div className="mb-3" style={{

        }}>
          <label for="exampleInputEmail1" className="form-label mx-auto">Email address</label>
          <input type="email" className="form-control m-3 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" style={{
            width: "500px",
            height: "35px"
          }} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="InputInquiries" className="form-label mx-auto">Inquiry Subject</label>
          <input type="text-box" className="form-control mx-auto" id="InputInquiries" style={{
            width: "500px",
            height: "100px"
          }} />
        </div>
        <div className="input-group mx-auto ">
          <div className="input-group-prepend " >
          </div>
          <textarea className="form-control rounded m-2" aria-label="With textarea" style={{
            width: "200px",
            height: "200px"
          }}></textarea>
        </div>
        <button type="submit" className="btn btn-primary m-2">Submit</button>
      </form>

      <div className="mx-auto">
        <footer className="card mx-auto" style={{
          backgroundColor: "#edf2f4",
          width: "120px",

        }}>
          <p className="col-md-4" style={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            justifyContent: "center"}}>
            <a href="https://www.linkedin.com/in/andrew-randolph-711151192/" rel="nofollow noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" className="d-flex align-items-center mx-1" style={{
                height: "100px",
                width: "100px"
              }} />
            </a> &nbsp;
            <a href="https://github.com/Andrewjr98" rel="nofollow noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            </a>
            <a href="https://stackoverflow.com/users/21101459/andrewjr98" rel="nofollow noreferrer">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png" className="d-flex align-items-center mx-1 p-1" alt="stackoverflow" style={{
                height: "100px",
                width: "100px"
              }} />
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}