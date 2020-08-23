import React from 'react';
import './App.css';
import BusinessList from '../components/business-list/BusinessList';
import SearchBar from '../components/search-bar/SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
