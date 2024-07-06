import { useState, useEffect, createContext } from 'react'
import useFetch from './utils/useFetch'
import FilterBar from './components/FilterBar'
import JobListings from './components/JobListings'
import jobs from "./data/jobs.json"

import './scss/style.scss'

export const tagsContext = createContext();


function App() {
  const [tags, setTags] = useState([]);


  function filterDisplayedJobs(jobs) {
    const filteredJobs = jobs.filter((offer) => {
      const {role, level, languages, tools} = offer; 
      
      return tags.every((tag) => [role, level, ...languages, ...tools].includes(tag))
    })

    return filteredJobs.length ? filteredJobs : jobs;
  }


  // remove one tag from the filter bar
  function handleTagRemoval(index) {
    const updatedTags = tags.filter(tag => {
      if (index !== tags.indexOf(tag)) {
        return tag;
      }
    });
    setTags(updatedTags)
  }


  // remove all tags from the filter bar
  function handleClearClick() {
    setTags([]);
  }

  return (
    <> 
      <header className="header" aria-hidden="true"> 
      </header>

      <main className="main">
        <h1 className="visually-hidden"> Job listings </h1>
        
        <div className="container main__container">
          <FilterBar tags={tags} onTagRemoval={handleTagRemoval} onClearClick={handleClearClick}/>

          <tagsContext.Provider value={{ tags, setTags }}>
            {jobs && <JobListings data={filterDisplayedJobs(jobs)} />}
          </tagsContext.Provider>
        </div>
      </main>
    </>
  )
}

export default App
