import { useSelector, useDispatch } from "react-redux";
import { addWidget, removeWidget } from "./dashboardSlice";
import { useState } from "react";

function dashboard() {
  const dashboard = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [newWidget, setNewWidget] = useState({ name: "", text: "" });
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddWidget = () => {
    const widget = { ...newWidget, id: Date.now() };
    dispatch(addWidget({ categoryName: selectedCategory, widget }));
    setNewWidget({ name: "", text: "" });
  };

  const handleRemoveWidget = (categoryName, widgetId) => {
    dispatch(removeWidget({ categoryName, widgetId }));
  };

  return (
    <div>
      {dashboard.map((category) => (
        <div key={category.categoryName}>
          <h2>{category.categoryName}</h2>
          {category.widgets.map((widget) => (
            <div key={widget.id}>
              <span>
                {widget.name}: {widget.text}
              </span>
              <button
                onClick={() =>
                  handleRemoveWidget(category.categoryName, widget.id)
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      ))}

      <div>
        <h3>Add a New Widget</h3>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidget.name}
          onChange={(e) => setNewWidget({ ...newWidget, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidget.text}
          onChange={(e) => setNewWidget({ ...newWidget, text: e.target.value })}
        />
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {dashboard.map((category) => (
            <option key={category.categoryName} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <button onClick={handleAddWidget}>Add Widget</button>
      </div>
    </div>
  );
}

export default dashboard;
