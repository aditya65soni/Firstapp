import React,{useState} from "react";

const Contact = () => {
  const [adata, setadata] = useState({
    fullname:'',
    email:'',
    phone:'',
    textarea:''
  });
const onsubmithandle =(e)=>{
e.preventDefault()
alert(`The name of the customer is ${adata.fullname} , email id is ${adata.email}, phone no. is ${adata.phone} and msg is ${adata.textarea}`)
}

const onevent=(event)=>{
 const {name,value}= event.target

 setadata((prevalue)=>{
  return{
    ...prevalue,
    [name]:value
  }
 })
}

  return (
    <>
      <div className="text-center my-4 ">
        <h1>About Us</h1>
      </div>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <form onSubmit={onsubmithandle}>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Full Name
                </label>
                <input
                name = 'fullname'
                value={adata.fullname}
                onChange={onevent}
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                 name = 'email'
                value={adata.email}
                onChange={onevent}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Phone Number
                </label>
                <input
                 name = 'phone'
                value={adata.phone}
                onChange={onevent}
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div class="form-floating">
                <textarea
                 name = 'textarea'
                value={adata.textarea}
                onChange={onevent}
                  class="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
