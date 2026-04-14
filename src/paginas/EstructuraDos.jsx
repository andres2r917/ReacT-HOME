const EstructuraDos = () => {
  return (
    <section style={{ 
      borderRadius: '15px' ,padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
      <div style={{ borderRadius: '15px',border: '1px solid #4d4d4d', padding: '15px',  background: '#494949' }}>
        <h3>Módulo de Instructores</h3>
        <p>Consulta el estado de las contrataciones vigentes.</p>
        <img className="img1" src="https://tse4.mm.bing.net/th/id/OIP.sVg9FcHzpp4AZqeNsjfasgHaE8?pid=Api&P=0&h=180" alt="" />
      </div>
      <div style={{ borderRadius: '15px',border: '1px solid #424242', padding: '15px',  background: '#494949' }}>
        <h3>Reportes Rápidos</h3>
        <p>Genera estadísticas de cumplimiento en tiempo real.</p>
        <img className="img1" src="https://tse4.mm.bing.net/th/id/OIP.ODkeExiSEM2tDgqbn4EwLwHaEJ?pid=Api&P=0&h=180" alt="" />
      </div>
      <div className="panel1">
        <h3>Panel de informacion</h3>
        <nav>
          <ul>
            <li>Pendiente</li>
            <li>Firmado</li>
            <li>Finalizado</li>
          </ul>
        </nav>
      </div>
      <div className="banner">
        <h3>Banner Principal</h3>
        <p>Únete a nuestro equipo de formación integral. Buscamos profesionales apasionados por la enseñanza y la innovación tecnológica para liderar los próximos proyectos educativos.</p>
        <button className="B1">Ver vacantes</button>
        <button className="B1">Cargar hoja de vida</button>
      </div>
    </section>
  );
};

export default EstructuraDos;