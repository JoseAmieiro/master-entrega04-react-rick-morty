import React from "react";
import { AppRouter, FilterContextProvider } from "@/core";

export const App = () => {
  return (
    <FilterContextProvider>
      <AppRouter />
    </FilterContextProvider>
  )
};
