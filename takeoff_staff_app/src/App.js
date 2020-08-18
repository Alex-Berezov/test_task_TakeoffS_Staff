import React from 'react';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactsContainer from "./components/Contacts/ContactsContainer";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>

                <main>
                    <article>
                        <div className="wrapper">
                            <ContactsContainer />
                        </div>
                    </article>
                </main>

                <footer>
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default App;
