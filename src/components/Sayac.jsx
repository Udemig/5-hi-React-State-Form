import { useState } from 'react';

const Sayac = ({ tema, setTema }) => {
  // state (durum) yönetimi
  // state değiştiği anda component tekrar render olur(ekrana basılır)
  // başlangıç değeri > componetın ekrana geldiği anda sahip olduğu değeridir
  // const [değer,setDeğer] = useState("Başlangıç Değeri")
  const [sayi, setSayi] = useState(0);

  //   sayaç değerini 1 arttırır
  function artiSayac() {
    setSayi(sayi + 1);
  }

  //   sayaç değerini  1 azaltır
  function eksiSayac() {
    setSayi(sayi - 1);
  }

  // tema değerini tersine çevirir
  function degisTema() {
    setTema(tema === 'Açık' ? 'Koyu' : 'Açık');
  }

  return (
    <div>
      <h1 className="my-4">SAYAÇ</h1>
      <button className="btn btn-danger" onClick={eksiSayac}>
        Azalt
      </button>
      <span> {sayi} </span>
      <span> {tema} </span>
      <button className="btn btn-success" onClick={artiSayac}>
        Artır
      </button>
      <br />
      <button className="btn btn-info my-4" onClick={degisTema}>
        Tema Değiştir
      </button>
    </div>
  );
};

export default Sayac;
