import React from "react";
import "./App.css";
import Routes from "./Routes";
// import react-bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "./Components/Utilities/Spinner/Spinner";

function App() {
  return (
    <React.Suspense
      fallback={
        <div
          style={{
            textAlign: "center",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner />
        </div>
      }
    >
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </React.Suspense>
  );
}

export default App;
