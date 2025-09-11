import '../styles/Register.css';

export default function Registration() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Logo placeholder */}
        <div className="auth-logo">CampusConnect</div>
        <p className="auth-subtitle">Please enter your details to Register</p>

        {/* Registration form */}
        <form className="auth-form">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <div className="password-row">
            <label>Password</label>
            <a href="/" className="forgot-link">Forgot password?</a>
          </div>
          <input type="password" placeholder="••••••••" required />

          <label>Confirm Password</label>
          <input type="password" placeholder="••••••••" required />

        <div className="terms">
        <input type="checkbox" id="terms" className="small-checkbox" />
           <label htmlFor="terms">
            I accept Terms and Conditions
            </label>
        </div>

          <button type="submit" className="btn-primary">
            Create an account
          </button>
        </form>

      </div>
    </div>
  );
}
