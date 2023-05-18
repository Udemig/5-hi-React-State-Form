import { useState } from 'react';

const Form = () => {
  //   const [isim, setIsim] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    password: '',
  });

  const [users, setUsers] = useState([]);

  // kullanıclar verisini günceller
  function updateUsers(e) {
    e.preventDefault();
    // formu göndermeden önce bütün verilerin kontrolü yapılmalı
    // ! > boş  , null  , undefined olma durumlarını kontrol eder
    if (!formData.name || !formData.surname || !formData.password) {
      alert('Lütfen formu doldurun');
      return;
    }

    // yukarıdaki doğrulamadan geçerse burası çalışır
    //? spread(...) dizideki daha önce eklenenleri muhafaza etemeye yarar
    //? [...users > öncekilri muhafaza eder , formData > yeniEklenecek]

    setUsers([...users, { ...formData, id: new Date().getTime() }]);

    // bütün formu sıfırla
    // setFormData({ id: '', name: '', surname: '', password: '' });
  }

  //   form elemanı silme
  function handleDelete(deletingId) {
    // DİZİDEKİ ELEMANLARDAN  SİLİNECEK ELEMANIN İDSİNE EŞİT OLMAYANLARI GETİR
    const filtred = users.filter((user) => user.id !== deletingId);

    // yeni oluşan diziyi ekrana basılan diziye aktar
    setUsers(filtred);
  }

  console.log(users);
  return (
    <>
      <form onSubmit={updateUsers}>
        <h1>FORM ALANI</h1>
        <label className="form-label">İsim: </label>
        <br />
        <input
          className="form-control"
          value={formData.name}
          type="text"
          // bir obje olrak tutlan statei güncellerken ...(spread) kullanılması zorunlu
          // ... sayesinde değişmeyecek değerler muhafaza edilir
          // kullanmazak obje içerisinde 1 değeri değiştiriken diğerilini sileriz
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <br />
        <label className="form-label">Soyisim: </label>
        <br />
        <input
          className="form-control"
          value={formData.surname}
          type="text"
          onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
        />
        <br />
        <label>Şifre: </label>
        <br />
        <input
          className="form-control"
          value={formData.password}
          type="password"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />

        <button type="Submit" className="btn btn-info my-4">
          Gönder
        </button>
      </form>

      <table className="table table-dark bg-dark my-4">
        <thead>
          {/* başlıklar listenecek */}
          <th>İsim</th>
          <th>Soyisim</th>
          <th>Şifre</th>
          <th>İşlemler </th>
        </thead>
        <tbody>
          {/* kullanıclar listelenecek */}
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleDelete(user.id)} className="btn btn-danger">
                  Sil
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Form;

// (e) => setIsim(e.target.value)
