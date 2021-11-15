import React from "react";

function Home() {
  return <div style={styles.main}>Home</div>;
}

const styles = {
  main: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
};

export default Home;
