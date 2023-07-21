/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      darkMode: false,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.darkMode !== this.state.darkMode) {
      console.log(
        'darkMode a changé de',
        prevState.darkMode,
        'à',
        this.state.darkMode
      );
    }
  }

  // --- Fonction qui switch le darkMode
  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  /**
   * 
   * // useEffect []
  // Le composant vient de se créer
  componentDidMount(): void {
    console.log('toto');
  }

  // useEffect [darkMode(ex)]
  // le composant vient de re-render
  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>
  ): void {}

  // useEffect [], () => {
  //  return () => {
  //
  // }
  // }
  // lorsque le composant est détruit => exécute la fonction
  componentWillUnmount(): void {}
   */

  render() {
    return (
      <main className={this.state.darkMode ? 'dark' : ''}>
        <h1>O'light</h1>
        <img
          src={`/docs/${this.state.darkMode ? 'logo-green' : 'logo-gray'}.png`}
          alt="React"
        />
        <button type="button" onClick={this.toggleDarkMode}>
          Switch to dark mode
        </button>
      </main>
    );
  }
}
export default App;
