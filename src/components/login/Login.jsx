import { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;

    if (value.toLowerCase().includes('o')) {
        alert('Por favor, ¡Nombres de usuario sin la letra o!');
      }
        
    setUsername(value);
  };

  const handleRegister = () => {
    
    if (username.trim() === '' || username.toLowerCase().includes('o')) {
      alert('Usuario inválido para registrarse');
      return;
    }


    alert('¡Usuario registrado correctamente!');
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p>
    </div>
  );
};

export default Login;
