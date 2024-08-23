import React from 'react';
import './WidgetItem.css';

const WidgetItem = ({ widget, removeWidget }) => {
  return (
    <div className="widget-item">
      <h4>{widget.name}</h4>
      <p>{widget.content}</p>
      <button className="remove-widget-button" onClick={removeWidget}>
        &times; Remove
      </button>
    </div>
  );
};

export default WidgetItem;
