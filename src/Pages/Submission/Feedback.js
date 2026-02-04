import { useState } from "react";
function Feedback() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Feedback</h2>
      <textarea
        rows="5"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your feedback..."
      />
      <br />
      <button
        onClick={() => {
          alert("Thank you for your feedback");
          setText("");
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default Feedback;
