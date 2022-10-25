import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

// const eventFn = () => {
//   console.log('h1 clicado');
// };

const Button = ({ incrementButton }) => {
  console.log('Filho renderizou');
  //cria o component Button e passa o atributo fazendo destructoring
  return <button onClick={() => incrementButton(10)}>+</button>;
  //o onClick é uma arrow function porque precisamos que seja chamada apenas quando clicada
};

Button.propTypes = {
  //define o tipo de incrementButton = função
  incrementButton: P.func,
};

function App() {
  //componentDidUpdate - executa toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('componentDidUpdate');
  // });

  //componentDidMount - executa 1x
  // useEffect(() => {
  //   console.log('componentDidMount');
  // }, []);

  //componentDidMount - executa 1x
  // useEffect(() => {
  //   document.querySelector('h1')?.addEventListener('click', eventFn);

  //   //componentWillAmount - limpeza
  //   return () => {
  //     document.querySelector('h1')?.removeEventListener('click', eventFn);
  //   };
  // }, []);

  //Com dependência = executa toda vez que a dependência mudar
  // useEffect(() => {
  //   console.log('contador mudou para', counter);
  // }, [counter]);

  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    // aqui é a função
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  const btn = useMemo(() => {
    return <Button incrementButton={incrementCounter} />;
  }, [incrementCounter]);

  return (
    <div className="App">
      <p>Teste</p>
      <h1>Contador: {counter}</h1>
      {/* Chama o componente Button */}
      {btn}
      {/* incrementButton é um atributo que passa para o componente Button como prop */}
      {/* Esse atributo é igual à função incrementCounter */}
    </div>
  );
}

export default App;
