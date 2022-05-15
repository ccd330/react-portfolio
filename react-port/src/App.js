import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {
      name: 'space sounds',
      description: 'A group project where we worked together to retrieve and display data from other servers via third party api programs.',
    },
    { name: 'ideafora', description: 'a mobile friendly website that organizes user generated ideas in a format that allows other users to give feedback and collaborate' },
    { name: 'git-it-done', description: 'This project is a web application that uses GitHub API to search for projects with open issues and pull requests.' },
    { name: 'employee-tracker', description: 'The employee tracker is an SQL databases that tracks employees, departments, and more.'},
    { name: 'pizza-hunt', description: 'In Pizza Hunt, users can share and discuss their dream pizza-topping combinations.'},
    { name: 'coding quiz', description: 'A simple coding quiz which developers can use to test their technical knowledge prior to job interviews.' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <About></About>
            <Resume></Resume>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;