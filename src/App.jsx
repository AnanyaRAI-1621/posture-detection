import { useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking posture...");

  function checkPosture() {
  const isSittingStraight = Math.random() > 0.5;

  if (isSittingStraight) {
    setStatus("✅ Good Posture");
  } else {
    setStatus("❌ Bad Posture (Sit straight)");
  }
}

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
     <h1>Rule-Based Bad Posture Detection System</h1>

<p style={{

    fontSize: "20px",
    marginTop: "20px",
    color: status.includes("Good") ? "lightgreen" : "salmon"
  }}>
    {status}
This project is a simple posture detection system created using React.
It works on basic rule-based logic and shows whether the posture is good
or bad. The project is designed for learning purpose and to understand
how frontend logic works in real applications.
</p>

      <button
      onClick={checkPosture}
       style={{
    padding: "12px 30px",
    fontSize: "18px",
    cursor: "pointer",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    marginTop: "20px"
  }}
>
  Check Posture
</button>

      <h2 style={{ marginTop: "30px" }}>{status}</h2>
    </div>
  );
}

export default App;