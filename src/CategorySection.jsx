import React from "react";
import WidgetItem from "./WidgetItem";
import "./CategorySection.css";

const CategorySection = ({ category, addWidget, removeWidget }) => {
  return (
    <div className="category-section">
      <h3>{category.name}</h3>
      <div className="widget-grid">
        {category.widgets.map((widget) => (
          <WidgetItem
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.name, widget.id)}
          />
        ))}
        <button
          className="add-widget-button"
          onClick={() => addWidget(category.name)}
        >
          + Add Widget
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
