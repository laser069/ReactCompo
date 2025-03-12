// write the component code here
import React from 'react'

function usercard() {
  const email = "nicetrydiddy@baby.oil";
  const name = "Diddy .P"
  const imgurl = "https://media.gq.com/photos/650b335c6bd96a9cdafbcd2a/1:1/w_1125,h_1125,c_limit/diddy.jpg"
  const phone = "6969696969"
  const address = `🏠 123 Can't Hide Forever Blvd
📍 Nice Try, Diddy, NY 00000`
  return (
    <div style={{border:"3px",borderColor:"white"}}>
        <img src={imgurl} alt="" style={{height:"100px"}}/>
        <h4>{name}</h4>
        <h5>{email}</h5>
        <h3>Phone:{phone}</h3>
        Address:{address}
    </div>
  )
}

export default usercard
