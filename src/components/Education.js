import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: 'Lovely Professional University',
      duration: '2022 - 2026',
      qualification: 'B.Tech Computer Science and Engineering',
      result: 'CGPA: 7.89',
      location: 'Phagwara, Punjab',
    },
    {
      institution: 'The Pentecostal Assembly School',
      duration: '2019 - 2021',
      qualification: 'Intermediate',
      result: '84%',
      location: 'Bokaro, Jharkhand',
    },
    {
      institution: 'Crescent Public School',
      duration: '2017 – 2019',
      qualification: 'Matriculation',
      result: '88%',
      location: 'Bokaro, Jharkhand',
    },
  ];

  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
    width: '100%',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '600px',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Added hover effect
  };

  const institutionStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: '4px',
  };

  const metaStyle = {
    fontSize: '14px',
    color: '#666666',
    marginBottom: '8px',
  };

  const detailsStyle = {
    fontSize: '16px',
    color: '#444444',
  };

  // Hover effect style for card
  const hoverCardStyle = {
    ...cardStyle,
    '&:hover': {
      transform: 'translateY(-5px)', // Lift the card when hovered
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
    },
  };

  return (
    <div style={containerStyle}>
      {educationData.map((edu, index) => (
        <div
          key={index}
          style={{
            ...cardStyle,
            marginBottom: index === educationData.length - 1 ? '0' : '20px', // Remove margin from the last card
          }}
        >
          <div style={institutionStyle}>{edu.institution}</div>
          <div style={metaStyle}>
            {edu.duration} • {edu.location}
          </div>
          <div style={detailsStyle}>
            {edu.qualification} — {edu.result}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
