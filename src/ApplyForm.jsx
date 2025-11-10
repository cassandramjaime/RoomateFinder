import React, { useState } from 'react';

export default function ApplyForm({ onClose }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '',
    leaseLength: '12 months',
    pets: 'no',
    gender: '',
    felony: 'no',
    zoomTimes: '',
    about: '',
    agree: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.email.trim()) e.email = 'Please enter an email';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.phone.trim()) e.phone = 'Please enter your phone number';
    if (!form.moveInDate) e.moveInDate = 'Please choose a move-in date';
    if (!form.leaseLength) e.leaseLength = 'Please choose a lease length';
    if (!form.pets) e.pets = 'Please indicate whether you have pets';
    if (!form.gender) e.gender = 'Please self-identify your gender';
    if (!form.felony) e.felony = 'Please indicate whether you have been convicted of a felony';
  if (!form.about.trim()) e.about = 'Please tell us a bit about yourself';
  if (!form.zoomTimes.trim()) e.zoomTimes = 'Please provide three preferred Zoom times';
    if (!form.agree) e.agree = 'Please confirm you have read and accept the requirements';
    return e;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    // Build an email body and open mail client
    const subject = encodeURIComponent(`Room application from ${form.name}`);
    const bodyLines = [
      `Name: ${form.name}`,
  `Email: ${form.email}`,
  `Phone: ${form.phone}`,
  `Move-in date: ${form.moveInDate}`,
  `Preferred Zoom times:\n${form.zoomTimes}`,
      `Desired lease length: ${form.leaseLength}`,
      `Gender: ${form.gender}`,
      `Felony conviction: ${form.felony}`,
      `Pets: ${form.pets}`,
      `About applicant:\n${form.about}`,
      ``,
      `Thank you for your application.`,
      `If your application is a good fit, Cristina will reach out to schedule a follow-up and next steps.`
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    // Open mail client (mailto) but put the listing owner in BCC so their address
    // is not shown in the To field. Use applicant email as the To recipient so
    // clients that require a To field still open the composer.
    try {
      const to = encodeURIComponent(form.email);
      const bcc = encodeURIComponent('cristinamjaime@gmail.com');
      window.location.href = `mailto:${to}?bcc=${bcc}&subject=${subject}&body=${body}`;
    } catch (err) {
      console.warn('Could not open mail client', err);
    }

    setSubmitted(true);
  }

  // Add mobile-specific styles
  const mobileStyles = window.innerWidth <= 600 ? {
    modalStyle: {
      width: '100%',
      borderRadius: '12px 12px 0 0',
      padding: '0.8rem 1rem'
    },
    overlayStyle: {
      padding: '0',
      alignItems: 'flex-end'
    }
  } : {};

  return (
    <div style={{...overlayStyle, ...mobileStyles.overlayStyle}} role="dialog" aria-modal="true">
      <div style={{...modalStyle, ...mobileStyles.modalStyle}}>
        <button onClick={onClose} style={closeBtnStyle} aria-label="Close">×</button>
        {!submitted ? (
          <>
            <h2 style={{ marginTop: 0 }}>Application - Screening Questions</h2>
            <form onSubmit={handleSubmit}>
              <label style={labelStyle}>Full name*</label>
              <input name="name" value={form.name} onChange={handleChange} style={inputStyle} />
              {errors.name && <div style={errorStyle}>{errors.name}</div>}

              <label style={labelStyle}>Email*</label>
              <input name="email" value={form.email} onChange={handleChange} style={inputStyle} />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}

              <label style={labelStyle}>Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} style={inputStyle} />
              {errors.phone && <div style={errorStyle}>{errors.phone}</div>}

              <label style={labelStyle}>Desired move-in date</label>
              <input name="moveInDate" type="date" value={form.moveInDate} onChange={handleChange} style={inputStyle} />
              {errors.moveInDate && <div style={errorStyle}>{errors.moveInDate}</div>}

              <label style={labelStyle}>Preferred Zoom intro times (please provide three options)</label>
              <textarea name="zoomTimes" value={form.zoomTimes} onChange={handleChange} placeholder="e.g. 2025-11-10 18:00-19:00 CST; 2025-11-11 09:00-09:30 CST; 2025-11-12 20:00-20:30 CST" style={{ ...inputStyle, height: 100 }} />
              {errors.zoomTimes && <div style={errorStyle}>{errors.zoomTimes}</div>}

              <label style={labelStyle}>Lease length</label>
              <select name="leaseLength" value={form.leaseLength} onChange={handleChange} style={inputStyle}>
                <option>3 months</option>
                <option>6 months</option>
                <option>9 months</option>
                <option>12 months</option>
              </select>
              {errors.leaseLength && <div style={errorStyle}>{errors.leaseLength}</div>}

              <label style={labelStyle}>Pets?</label>
              <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: 12 }}><input type="radio" name="pets" value="no" checked={form.pets === 'no'} onChange={handleChange} /> No</label>
                <label><input type="radio" name="pets" value="yes" checked={form.pets === 'yes'} onChange={handleChange} /> Yes</label>
              </div>
              {errors.pets && <div style={errorStyle}>{errors.pets}</div>}

              <label style={labelStyle}>Gender (self-identify)</label>
              <select name="gender" value={form.gender} onChange={handleChange} style={inputStyle}>
                <option value="">Select...</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="non-binary">Non-binary</option>
                <option value="prefer-not">Prefer not to say</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <div style={errorStyle}>{errors.gender}</div>}

              <label style={labelStyle}>Have you ever been convicted of a felony?</label>
              <div style={{ marginBottom: '0.6rem' }}>
                <label style={{ marginRight: 12 }}><input type="radio" name="felony" value="no" checked={form.felony === 'no'} onChange={handleChange} /> No</label>
                <label><input type="radio" name="felony" value="yes" checked={form.felony === 'yes'} onChange={handleChange} /> Yes</label>
              </div>
              {errors.felony && <div style={errorStyle}>{errors.felony}</div>}

              <label style={labelStyle}>Tell us a bit about yourself</label>
              <textarea name="about" value={form.about} onChange={handleChange} style={{ ...inputStyle, height: 80 }} />
              {errors.about && <div style={errorStyle}>{errors.about}</div>}

              <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: '0.6rem' }}>
                <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
                <span>I have read the requirements: I will choose one or two rooms, I will pay a $1,000 deposit, and I understand there is a $500 fee for early lease cancellation. I consent to being contacted regarding this application.</span>
              </label>
              {errors.agree && <div style={errorStyle}>{errors.agree}</div>}

              <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
                <button type="submit" style={submitBtnStyle}>Submit application</button>
                <button type="button" onClick={onClose} style={secondaryBtnStyle}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <div>
            <h3>Thanks — application submitted</h3>
            <p>We've opened your mail client. If it didn't open, your application details are above — you can copy them into an email to Cristina.</p>
            <div style={{ textAlign: 'right' }}>
              <button onClick={onClose} style={submitBtnStyle}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Styles
const overlayStyle = {
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.45)',
  display: 'flex',
  alignItems: 'flex-start', // Changed from center to flex-start
  justifyContent: 'center',
  zIndex: 9999,
  padding: '5vh 0', // Add some padding at the top and bottom
  overflowY: 'auto' // Make the overlay itself scrollable
};
const modalStyle = {
  width: 'min(720px, 92%)',
  background: '#fff',
  padding: '1rem 1.25rem',
  borderRadius: 12,
  boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
  position: 'relative',
  maxHeight: '90vh',
  overflowY: 'auto',
  WebkitOverflowScrolling: 'touch' // For smooth scrolling on iOS
};
const closeBtnStyle = {
  position: 'absolute',
  right: 10,
  top: 8,
  background: 'transparent',
  border: 'none',
  fontSize: 22,
  cursor: 'pointer'
};
const labelStyle = { display: 'block', marginTop: '0.6rem', marginBottom: '0.2rem', fontSize: '0.95rem', fontWeight: 600 };
const inputStyle = { width: '100%', padding: '0.55rem 0.6rem', borderRadius: 8, border: '1px solid #ddd', boxSizing: 'border-box' };
const submitBtnStyle = { background: '#6C5B7B', color: '#fff', border: 'none', padding: '0.6rem 1rem', borderRadius: 8, cursor: 'pointer' };
const secondaryBtnStyle = { background: '#EEE', color: '#333', border: 'none', padding: '0.55rem 0.95rem', borderRadius: 8, cursor: 'pointer' };
const errorStyle = { color: '#b00020', fontSize: '0.85rem', marginTop: 6 };
