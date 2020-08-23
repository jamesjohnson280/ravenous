import React from 'react';
import './App.css';
import SearchBar from '../components/search-bar/SearchBar';
import BusinessList from '../components/business-list/BusinessList';

function App() {
  return (
    <div class="App">
    <h1>ravenous</h1>
    <SearchBar />
    <BusinessList />
  </div>
  );
}

export default App;
