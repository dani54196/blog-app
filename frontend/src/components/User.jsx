import React from "react";

function User() {
  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:8080/api/blog", {
            method: "GET",
            headers: new Headers({ "Content-type": "application/json" }),
            mode: "cors",
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }}
      >
        user get
      </button>
    </div>
  );
}

export default User;
