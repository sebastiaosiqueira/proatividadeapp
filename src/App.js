import { useState } from 'react';
import './App.css';



let initialState = [
{id:1, prioridade:1, titulo: "Primeira atividade", descricao: 'Primeira atividade'},{id:2,prioridade:2, titulo: "Segunda atividade", descricao: 'Segunda atividade'}
];

function App() {
  const [atividades, setAtividades] = useState(initialState)

function addAtividade(e){
  e.preventDefault();

  const atividade={
    id: document.getElementById('id').value,
    prioridade: document.getElementById('prioridade').value,
    titulo: document.getElementById('titulo').value,
    descricao: document.getElementById('descricao').value

  };

  
  setAtividades([...atividades, atividade]);
}

function prioridadeLabel(param){
  switch (param) {
    case '1':
    case 1:
      return 'Baixo';
    case '2':
    case 2:
      return 'Normal';
    case '3':
    case 3:
      return 'Alto';
    default:
      return 'Não definido';
  }
}



function prioridadeSyle(param){
  switch (param) {
    case '1':
    case 1:
      return 'smile';
    case '2':
    case 2:
      return 'meh';
    case '3':
    case 3:
      return 'frown';
    default:
      return 'Não definido';
  }
}
  return (
    <>
     
       <form className="form-field" onSubmit={addAtividade}>
          <legend>Cadastro</legend>
        <div className="row">
           <label for="Id" class="col-sm-2 col-form-label">Id</label>
           <div className='col-sm-2'>
              <input   className="form-control"id="id" type='text' placeholder='id'></input>
           </div>
      
        </div>
        <br></br>
         <div className='col-6 ms:col-2 offset-2'>
      <select className="form-select "id="prioridade">
        <option defaultValue="0">Selecionar...</option>
        <option value="1">Baixo</option>
        <option value="2">Normal</option>
         <option value="3">Alto</option>
      </select>
    </div>
         <br></br>
        <div className='row'>
          <label for="Id" class="col-sm-2 col-form-label">Titulo</label>
           <div className='col-sm-10'>
        <input  className="form-control"  id="titulo" type='text' placeholder='titulo'></input>
        </div>
</div>
<br></br>
      <div className='row'>
          <label for="Id" class="col-sm-2 col-form-label">Descricao</label>
           <div className='col-sm-10'>
        <input  className="form-control"  id="descricao" type='text' placeholder='descricao'></input>
        </div>
</div>
<br></br>
 <div className='row'>
  
<button type="submit" className="btn btn-outline-primary">+ Atividades</button>

</div>

      </form>
<br></br>
    <div className="row">
         {atividades.map(ativ=> (
           <div  key={ativ.id} className="card border-primary mb-3">
               <div className="card-body">
                <div className='d-flex justify-content-between'>
                  <h5 className='card-title'>
                    <span className='badge rounded-pill bg-secondary me-2'>
                  {ativ.id}
                    </span>
                - {ativ.titulo}
                  </h5>
                  <h6>
                  Prioridade:
                  <span className='ms-1 text-black'>
                      <i className={"me-1 far fa-"+ prioridadeSyle(ativ.prioridade)}></i>
                        {prioridadeLabel(ativ.prioridade)}
                </span>

                  </h6>
                </div>
                <p className="card-text">
                    {ativ.descricao}
                </p>
                <div className='d-flex justify-content-end' m-0>
                  <button className='btn btn-outline-primary me-2'>
                    <i className='fas fa-pen me-2'></i>
                    Editar
                  </button>
                  <button className='btn btn-outline-danger'>
                     <i className='fas fa-trash me-2'></i>
                    Deletar
                  </button>
                </div>
               </div>
              </div>
          
         ))}
         
    </div>
     </>
  );
 
}

export default App;
