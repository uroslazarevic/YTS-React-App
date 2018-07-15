import React from 'react';

const renderField = ({ input, icon, type, label, meta: { touched, error } }) => {
  const className = `field ${touched && error ? 'has-danger': ''}`
    return (
      <div className={className} >
        <input { ...input} placeholder={label} type={type} />
        <span className="form-icon">{icon}</span>
        <div className="text-help">{ touched && error && <span>{error}</span> }</div>
      </div>
    )
  }


export default renderField;