import React from "react";

export default function Contact() {
  return (
    <div class= "d-flex align-items-start" style={{
      color: "#e0e1dd",
      backgroundColor: "#1b263b"
    }}>
      <h1 class="mx-auto" style={{
        width: "400px"
      }}>Contact Page</h1>
      <form>
        <div class="mb-3" style={{

        }}>
          <label for="exampleInputEmail1" class="form-label mx-auto">Email address</label>
          <input type="email" class="form-control m-3 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" style={{
            width: "500px",
            height: "35px"
          }} />
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div class="mb-3">
          <label for="InputInquiries" class="form-label mx-auto">Inquiry Subject</label>
          <input type="text-box" class="form-control mx-auto" id="InputInquiries" style={{
            width: "500px",
            height: "100px"
          }} />
        </div>
        <div class="input-group mx-auto ">
          <div class="input-group-prepend " >
          </div>
          <textarea class="form-control rounded m-2" aria-label="With textarea" style={{
            width: "200px",
            height: "200px"
          }}></textarea>
        </div>
        <button type="submit" class="btn btn-primary m-2">Submit</button>
      </form>

      <div className="mx-auto">
        <footer className="card mx-auto" style={{
          backgroundColor: "#edf2f4",
          width: "120px",

        }}>
          <p className="col-md-4">
            <a href="https://www.linkedin.com/in/andrew-randolph-711151192/" rel="nofollow noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" className="d-flex align-items-center mx-1" style={{
                height: "100px",
                width: "100px"
              }} />
            </a> &nbsp;
            <a href="https://github.com/Andrewjr98" rel="nofollow noreferrer">
              <img src="https://toppng.com/uploads/preview/github-logo-transparent-11659780111lim6tyk2io.png" className="d-flex align-items-center mx-1 p-1" alt="github" style={{
                height: "100px",
                width: "100px"
              }} />
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