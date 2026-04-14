const Header = () => {
  return (
    <header style={{ padding: '20px', background: '#474747', color: 'white' }}>
      <nav>
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none' }}>
          <li><strong>LOGO</strong></li>
          <li>Inicio</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );

};
export default Header;