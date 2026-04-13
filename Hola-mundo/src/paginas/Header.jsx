const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#222', color: 'white' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><i class="bi bi-trophy-fill"></i></li>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;