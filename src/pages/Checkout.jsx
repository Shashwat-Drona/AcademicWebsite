import { CreditCard, Landmark, Wallet, ShieldCheck, Clock } from 'lucide-react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-page">
      <div className="container">
        
        {/* Header */}
        <header className="checkout-header">
          <span className="section-label">ENROLLMENT PROCESS</span>
          <h1>Complete Your Application</h1>
          <p>You are moments away from joining a community dedicated to the mastery of architectural thought and morphology.</p>
        </header>

        <div className="checkout-layout">
          
          {/* Main Form */}
          <div className="checkout-form-area">
            
            {/* Step 1: Student Information */}
            <div className="form-section card">
              <div className="step-header">
                <span className="step-number">1</span>
                <h2>Student Information</h2>
              </div>
              
              <div className="form-grid">
                <div className="form-group">
                  <label>LEGAL FULL NAME</label>
                  <input type="text" placeholder="e.g. Julian Vane" />
                </div>
                <div className="form-group">
                  <label>INSTITUTIONAL EMAIL</label>
                  <input type="email" placeholder="julian@academy.edu" className="bg-light" />
                </div>
                <div className="form-group full-width">
                  <label>CURRENT ACADEMIC FOCUS</label>
                  <input type="text" placeholder="Describe your primary field of study" />
                </div>
              </div>
            </div>

            {/* Step 2: Payment Method */}
            <div className="form-section card">
              <div className="step-header">
                <span className="step-number">2</span>
                <h2>Payment Method</h2>
              </div>
              
              <div className="payment-methods">
                <button className="method-box active">
                  <CreditCard size={24} className="method-icon" />
                  <span>Credit Card</span>
                </button>
                <button className="method-box">
                  <Landmark size={24} className="method-icon" />
                  <span>Bank Transfer</span>
                </button>
                <button className="method-box">
                  <Wallet size={24} className="method-icon" />
                  <span>Scholarship</span>
                </button>
              </div>

              <div className="form-grid mt-4">
                <div className="form-group full-width">
                  <label>CARDHOLDER NAME</label>
                  <input type="text" />
                </div>
                <div className="form-group span-2">
                  <label>CARD NUMBER</label>
                  <input type="text" placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="form-group">
                  <label>EXPIRY</label>
                  <input type="text" placeholder="MM/YY" />
                </div>
                <div className="form-group">
                  <label>CVC</label>
                  <input type="text" placeholder="•••" />
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar Summary */}
          <aside className="checkout-sidebar">
            <div className="card summary-card">
               <div className="summary-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=600')"}}></div>
               
               <div className="summary-details">
                 <h3>Advanced Architectural Morphology</h3>
                 <span className="time-meta"><Clock size={14}/> 12 Week Intensive</span>
                 
                 <div className="cost-breakdown">
                   <div className="cost-row">
                     <span>Tuition Fee</span>
                     <strong>INR 2,450.00</strong>
                   </div>
                   <div className="cost-row">
                     <span>Material Access</span>
                     <strong>INR 120.00</strong>
                   </div>
                   <div className="cost-row total-row">
                     <span>Total Due</span>
                     <strong>INR 2,570.00</strong>
                   </div>
                 </div>

                 <button className="btn-primary full-width mt-4">Confirm Enrollment</button>
                 
                 <p className="terms-text">By clicking "Confirm Enrollment", you agree to Academic Atelier's Terms of Study and Privacy Protocol.</p>
               </div>
            </div>

            <div className="secure-badge card">
               <ShieldCheck size={24} className="text-primary"/>
               <p>Secure Academic Transaction encrypted with 256-bit protocol.</p>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
