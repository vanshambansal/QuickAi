import React from "react";

const FeedbackForm = ({ onClose }) => {

  const handleSubmit = async (e) => {
  e.preventDefault();

  const email = e.target.email.value.trim();
  const feedback = e.target.feedback.value.trim();
  const rating = e.target.rating.value;

  let errorMsg = "";
  if (!email) errorMsg += "Email is required.\n";
  else if (!/\S+@\S+\.\S+/.test(email)) errorMsg += "Please enter a valid email.\n";
  if (!feedback) errorMsg += "Feedback is required.\n";
  if (!rating) errorMsg += "Rating is required.\n";

  if (errorMsg) {
    alert(errorMsg);
    return;
  }

  try {
    const response = await fetch("http://localhost:3000/feedbacks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, feedback, rating }),
    });

    if (response.ok) {
      alert("Thank you for your feedback!");
      e.target.reset(); 
      if (onClose) onClose();
    } else {
      alert("Something went wrong while submitting feedback.");
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    alert("Server error. Please try again later.");
  }
};


  const containerStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
  };
  const boxStyle = {
    background: '#fff', borderRadius: '8px', padding: '24px', width: '320px', boxShadow: '0 2px 8px #aaa', position: 'relative'
  };
  const labelStyle = { display: 'block', marginBottom: '4px', fontWeight: 'bold' };
  const inputStyle = { width: '100%', padding: '6px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' };
  const buttonRowStyle = { display: 'flex', gap: '8px', marginTop: '8px' };
  const buttonStyle = { flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ccc', background: '#eee', cursor: 'pointer' };
  const submitStyle = { ...buttonStyle, background: '#4f46e5', color: '#fff', border: 'none' };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <button onClick={onClose} style={{position:'absolute',top:8,right:8,border:'none',background:'none',fontSize:'18px',cursor:'pointer'}}>&times;</button>
        <h3 style={{marginBottom:'12px'}}>Feedback Form</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" style={labelStyle}>Email *</label>
          <input type="email" name="email" id="email" style={inputStyle} />

          <label htmlFor="rating" style={labelStyle}>Rating *</label>
          <select name="rating" id="rating" style={inputStyle}>
            <option value="">Select rating</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <label htmlFor="feedback" style={labelStyle}>Feedback *</label>
          <textarea name="feedback" id="feedback" rows={3} style={inputStyle}></textarea>

          <div style={buttonRowStyle}>
            <button type="button" onClick={onClose} style={buttonStyle}>Cancel</button>
            <button type="submit" style={submitStyle}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;