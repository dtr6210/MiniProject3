import { useContext, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  //destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme, darkMode } = useContext(MyThemeContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("button clicked");
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("NO");
    } else {
      // successful password
      const data = { email: userEmail, password: userPassword };
      //connect to our api using fetch
      let result = await fetch(`http://localhost:8080/api/users/login`, {
        method: "POST", //specify the http method
        body: JSON.stringify(data), //the body is where the data is.  and stringify changes language to JSON
        headers: { "Content-Type": "application/json" }, //need to tell server what language we are speakiing.
      })
        .then((response) => response.json()) //convert back from json
        .then((data) => {
          //now we have the data
          // user not found, what to do?  display message that user is not found.  allow another login?
          if (data.result === 404) {
            setSubmitResult("Email does not exist");
          } else if (data.result === 200) {
            setSubmitResult("Successful Login");
            handleUpdateUser({ email: userEmail });
            navigate("/dash");
          } else if (data.result === 400) {
            setSubmitResult("Password is not correct");
          }
          console.log("post response", data.result);
          return data.result;
        });
    }
  };

  if (currentUser.email)
    return (
      <div className={darkMode ? "dark" : "light"}>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </div>
    );
  return (
    <div style={{ background: theme.background, color: theme.foreground }}>
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Use a controlled form input - value AND onChange */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>

        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
