import React from 'react';
import './WidgetSearch.css';

const WidgetSearch = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="widget-search">
      <input
        type="text"
        placeholder="Search for a widget..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default WidgetSearch;
