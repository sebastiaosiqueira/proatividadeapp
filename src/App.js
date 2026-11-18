import { useState } from 'react';
import './App.css';
import AtividadeForm from './components/AtividadeForm';

import AtividadeLista from './components/AtividadeLista';



let initialState = [
];

function App() {
  const [atividades, setAtividades] = useState(initialState)
const novoId = atividades.length > 0
    ? Math.max(...atividades.map((item) => Number(item.id))) + 1
    : 1;


function addAtividade(e){
  e.preventDefault();


  const atividade={
    id: novoId,
    prioridade: document.getElementById('prioridade').value,
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value

  };

  
  setAtividades([...atividades, atividade]);

  document.getElementById('prioridade').value = '0'; // use '' caso sua primeira option tenha value=""
  document.getElementById('titulo').value = '';
  document.getElementById('descricao').value = '';
}

function deletarAtividade(id){
  const atividadesFiltradas = atividades.filter(atividade => atividade.id !==id);
setAtividades([...atividadesFiltradas]);
}


return (
    <>
      <AtividadeForm 
        addAtividade={addAtividade} 
        atividades={atividades}
      />

      <br />

      <AtividadeLista
        atividades={atividades}
        deletarAtividade={deletarAtividade}
      />
    </>
  );
 
}

export default App;
