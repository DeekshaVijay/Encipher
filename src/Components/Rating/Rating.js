import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import "./rating.css";
function Rating() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating");
      return;
    }
    alert(`Thank you for your feedback!\nRating: ${rating} stars`);
    navigate("/");
  };
  return (
    <div className="rating-page">
      <h2>Thank You for Your Order 🎉</h2>
      <p>Please rate your experience</p>
      <div className="stars">
        {[1, 2, 3, 4, 5].map(star => (
          <span
            key={star}
            className={`star ${star <= (hover || rating) ? "active" : ""}`}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
          >
           < FaRegStar/>
          </span>
        ))}
      </div>
      <textarea
        placeholder="Write your feedback..."
        value={feedback}
        onChange={e => setFeedback(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Rating;
