import React from 'react'
import './HomeScreen.css'
function HomeScreen() {
    return (
        <div>
            <div className='header'>
                <h1>Header</h1>
                <div className='navBar'>
                    <a href='#'>poiwer</a>
                    <a href='#'>djfladf</a>
                    <a href='#'>ASDH</a>
                </div>
            </div>
            <div className='contentArea'>
                <form>
                    <textarea>sadfas</textarea>
                    <input type='submit' value="Submit"></input>
                </form>
            </div>
        </div>
    );
}

export default HomeScreen