import React from 'react';

const alertStyle = {
  backgroundColor: '#956c76',
  color: 'white',
  borderRadius: '2px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 8px 12px 0 rgba(0,0,0,0.3)',
  width: '300px',
  boxSizing: 'border-box',
  fontSize: '11px',
  position: 'relative',
};

const contentWrapperStyle = {
  padding: '10px 60px 10px 10px',
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
};

const iconPlaceholderStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '50px',
};

const messageStyle = {
  flex: 3,
  textAlign: 'center',
  textTransform: 'uppercase',
  width: '100%',
};

const closeButtonStyle = {
  minWidth: '50px',
  height: '100%',
  position: 'absolute',
  borderRadius: '0 2px 2px 0',
  cursor: 'pointer',
  top: 0,
  right: 0,
  backgroundColor: '##956c76',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const AlertTemplate = ({ message, options, style, close }) => (
  <div style={{ ...alertStyle, ...style }}>
    <div style={contentWrapperStyle}>
      <div style={iconPlaceholderStyle}>
        <div style={{ width: 32, height: 32 }} />
      </div>
      <div style={messageStyle}>{message}</div>
    </div>
    <div onClick={close} style={closeButtonStyle}>
      <svg
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
        height="25"
        width="25"
        viewBox="0 0 48 48"
      >
        <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
        <path d="M0 0h48v48h-48z" fill="none" />
      </svg>
    </div>
  </div>
);

export default AlertTemplate;
