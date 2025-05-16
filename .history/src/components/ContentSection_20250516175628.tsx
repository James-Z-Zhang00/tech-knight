import React from 'react'

const ContentSection: React.FC = () => {
  return (
    <div style={{
      flex: 1,
      padding: '2rem',
      display: 'flex',
      alignItems: 'center',
      height: '90vh',
    }}>
      <article style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(44, 24, 16, 0.7)',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{
          marginBottom: '2rem',
          position: 'relative',
          textAlign: 'center',
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <h2 style={{
            color: '#e6c88e',
            fontSize: '2.2rem',
            fontFamily: "'Goethe', serif",
            margin: 0,
            opacity: 0.9,
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 'normal',
            lineHeight: 1
          }}>
            Introduction
          </h2>
          <span style={{
            color: '#e6c88e',
            opacity: 0.7,
            fontSize: '2rem',
            lineHeight: 1
          }}>|</span>
          <h2 style={{
            color: '#e6c88e',
            fontSize: '1.8rem',
            fontFamily: 'Georgia, serif',
            fontWeight: 'normal',
            margin: 0,
            opacity: 0.9,
            letterSpacing: '0.05em',
            lineHeight: 1
          }}>
            Introduction
          </h2>
        </div>
        <p style={{
          color: '#e6c88e',
          fontSize: '1.1rem',
          lineHeight: '1.8',
          textAlign: 'justify',
          fontFamily: 'Georgia, serif',
          paddingLeft: '2rem',
        }}>
          In the depths of time, where legends whisper through ancient stones, stands a knight of extraordinary valor. This forgotten warrior, clad in armor that bears the marks of countless battles, embodies the timeless virtues of chivalry. Though his name may have faded from the scrolls of history, his spirit endures as a testament to the enduring power of honor, courage, and unwavering dedication to noble causes.
        </p>
      </article>
    </div>
  )
}

export default ContentSection 