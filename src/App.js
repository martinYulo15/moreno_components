import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
const Button = styled.button`
background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "green")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="App">
      <h1>Martin Moreno Lopez</h1>
      <h2>Practica components</h2>
      <Button as="a" href="https://utd.edu.mx">UTD</Button>
      <Button primary as="a" href="https://github.com/martinYulo15">GIT-HUB</Button>
      <Button as="a" href="https://www.instagram.com/martin_ml15/">Redes sociales</Button>
    </div>
  );
}

export default App;
