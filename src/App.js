import './App.css';
import rey_a from './img-reyes/rey_sisebuto.png'
import rey_b from './img-reyes/rey_leogivildo.png'
import rey_c from './img-reyes/rey_atanagildo.png'

function App() {
  let reyes = [
    {nombre: 'Sisebuto', img: rey_a},
    {nombre: 'Leogivildo', img: rey_b},
    {nombre: 'Atanagildo', img: rey_c}
  ]

  return (
    <div className="reyes">
      <div className="rey">
        <img src={reyes[0].img}/>
        <h2>{reyes[0].nombre}</h2>
      </div>
      <div className="rey">
        <img src={reyes[1].img}/>
        <h2>{reyes[1].nombre}</h2>
      </div>
      <div className="rey">
        <img src={reyes[2].img}/>
        <h2>{reyes[2].nombre}</h2>
      </div>
    </div>
  );
}

export default App;
