import React from "react"

function Signup(){
    return (
      <div>
        <h1>New user? Register now!</h1>
        <form>
          <div>
            <input type="text" name="username" placeholder="Create a Username" />
          </div>
          <div>
            <input type="password" name="password" placeholder="Create a Password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
}

export default Signup