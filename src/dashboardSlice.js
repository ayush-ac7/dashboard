import { createSlice } from "@reduxjs/toolkit";
import dashboardData from "./dashboardData";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: dashboardData,
  reducers: {
    addWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.find((cat) => cat.categoryName === categoryName);
      category.widgets.push(widget);
    },
    removeWidget: (state, action) => {
      const { categoryName, widget } = action.payload;
      const category = state.find((cat) => cat.categoryName === categoryName);
      category.widgets = category.widgets.filter(
        (widget) => widget.id !== widgetId
      );
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
