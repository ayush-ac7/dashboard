import React, { useState } from 'react';
import './App.css';
import WidgetSearch from './WidgetSearch';
import CategorySection from './CategorySection';
//import './Dashboard.css';
import './WidgetSearch.css';
import './CategorySection.css';
import './WidgetItem.css';

const App = () => {
  const [categories, setCategories] = useState([
    {
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 1, name: 'Cloud Accounts', content: 'Content of Cloud Accounts Widget' },
        { id: 2, name: 'Cloud Account Risk Assessment', content: 'Content of Cloud Account Risk Assessment Widget' },
      ],
    },
    {
      name: 'CWPP Dashboard',
      widgets: [
        { id: 3, name: 'Top 5 Namespace Specific Alerts', content: 'Content of Namespace Specific Alerts Widget' },
        { id: 4, name: 'Workload Alerts', content: 'Content of Workload Alerts Widget' },
      ],
    },
    {
      name: 'Registry Scan',
      widgets: [
        { id: 5, name: 'Image Risk Assessment', content: 'Content of Image Risk Assessment Widget' },
        { id: 6, name: 'Image Security Issues', content: 'Content of Image Security Issues Widget' },
      ],
    },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Handle search filter
  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  // Add a new widget
  const addWidget = (categoryName) => {
    const newWidget = {
      id: Date.now(),
      name: `New Widget ${Date.now()}`,
      content: 'Random text for the new widget.',
    };
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? { ...category, widgets: [...category.widgets, newWidget] }
          : category
      )
    );
  };

  // Remove a widget
  const removeWidget = (categoryName, widgetId) => {
    setCategories(prevCategories =>
      prevCategories.map(category =>
        category.name === categoryName
          ? { ...category, widgets: category.widgets.filter(widget => widget.id !== widgetId) }
          : category
      )
    );
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <WidgetSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filteredCategories.map(category => (
        <CategorySection
          key={category.name}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}
    </div>
  );
};

export default App;
