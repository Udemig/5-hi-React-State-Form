import Sayac from './components/Sayac';
import Form from './components/Form';
import { useState } from 'react';

function App() {
  // tema değerini tutar
  const [tema, setTema] = useState('Açık');
  // hangi bileşenin gösterileceğe değerini tutar
  const [showForm, setShowForm] = useState(true);

  return (
    <div className={`anasayfa ${tema === 'Açık' ? 'acık' : 'koyu'}`}>
      <div className="btn-group">
        {/* formu göster stateini true yapar */}
        <button className="btn btn-warning" onClick={() => setShowForm(true)}>
          Form
        </button>
        {/* formu göster stateini false yapar */}
        <button className="btn btn-primary" onClick={() => setShowForm(false)}>
          Sayaç
        </button>
      </div>
      {/*
      >koşuulu ekran basma(conditional rendering)
      >show form değeri true ise ekrana formu değilse sayacı bas
      */}
      {showForm === true ? <Form /> : <Sayac tema={tema} setTema={setTema} />}
    </div>
  );
}

export default App;
