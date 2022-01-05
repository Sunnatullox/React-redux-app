import React from 'react';
import Navbar from './Navbar';
import NewsAddForm from './NewsAddForm';
import NewsFilter from './NewsFilter/NewsFilter';
import NewsList from './NewsList/NewsList';
function App() {
    return (
        <div className='app'>
            <Navbar/>
            <div className='content'>
                <NewsList/>
                <div className='content__page'>
                    <NewsAddForm/>
                    <NewsFilter/>
                </div>
            </div>
        </div>
    );
}

export default App;