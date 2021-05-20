import React, { useState } from 'react';
import './ConversationSearch.css';

export default function ConversationSearch() {
  const [search,setSearch] =useState("")
    return (
      <div className="conversation-search">
        <input
          type="search"
          className="conversation-search-input"
          placeholder="Search Messages"
          onChange={e=>setSearch(e.target.value)}
        />
      </div>
    );
}