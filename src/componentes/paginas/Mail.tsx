import { ChangeEvent, useState } from "react";
import AuthService from "../servicios/AuthService";
//import { SpinnerCircular } from 'spinners-react';

interface mail {
  email: string,
  name: string,
  message: string
}

const Mail = () => {

  const [inputValues, setInputValues] = useState<mail>({
    email: '',
    name: "",
    message: ""
  });


  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setInputValues({
      ...inputValues,
      [e.target.id]: e.target.value,

    })
  }

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const resp = await AuthService.mail(inputValues.email, inputValues.name, inputValues.message);
      if (resp !== "{false}") {
        console.log(resp)
        //localStorage.setItem("user", JSON.stringify(resp));
        alert("Enviado con Exito....!!!!")
        window.location.reload()

      }
    } catch (error) {
      alert(error)
    }

  }

  return (
    <>
      <div className="Form" >
        <h1>Amistad </h1>
        <form id="contact-form" onSubmit={handleSubmit.bind(this)} method="POST" style={{ lineHeight: 4.5 }}>

          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">
              <div className="form-group">
                {/* <label htmlFor="name">Nombre</label> */}
                <input type="text" className="form-control" id="name" value={inputValues.name} onChange={e => handleChange(e)}
                  placeholder="nombre" required />
              </div>
            </div>
          </div>

          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">
              <div className="form-group">
                {/* <label htmlFor="exampleInputEmail1">Email</label> */}
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={inputValues.email} onChange={e => handleChange(e)}
                  placeholder='Email' required />
              </div>
            </div>
          </div>


          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1">

              <div className="form-group" >
                <label htmlFor="message">Messaje</label>

                <textarea className="form-control" id="message" value={inputValues.message} onChange={e => handleChange(e)} style={{ height: '144px', }} />
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </>
  )
}


Mail.propTypes = {}
export default Mail