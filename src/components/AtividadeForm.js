import React from 'react';

export default function AtividadeForm({ atividades = [], addAtividade }) {
 
const novoId =
      atividades.length > 0
        ? Math.max(...atividades.map((item) => Number(item.id) || 0)) + 1
        : 1;
  return (
    <form className="form-field" onSubmit={addAtividade}>
      <legend>Cadastro</legend>
      <div className="row">
        <label htmlFor="id" className="col-sm-2 col-form-label">Id</label>
        <div className="col-sm-2">
          <input
            className="form-control"
            id="id"
            type="text"
            placeholder="id"
            readOnly
            value={novoId}
          />
        </div>
      </div>
      <br />
      <div className="col-6 ms:col-2 offset-2">
        <select className="form-select" id="prioridade" defaultValue="0">
          <option value="0">Selecionar...</option>
          <option value="1">Baixo</option>
          <option value="2">Normal</option>
          <option value="3">Alto</option>
        </select>
      </div>
      <br />
      <div className="row">
        <label htmlFor="titulo" className="col-sm-2 col-form-label">Titulo</label>
        <div className="col-sm-10">
          <input className="form-control" id="titulo" type="text" placeholder="titulo" />
        </div>
      </div>
      <br />
      <div className="row">
        <label htmlFor="descricao" className="col-sm-2 col-form-label">Descricao</label>
        <div className="col-sm-10">
          <input className="form-control" id="descricao" type="text" placeholder="descricao" />
        </div>
      </div>
      <br />
      <div className="row">
        <button type="submit" className="btn btn-outline-primary">
          + Atividades
        </button>
      </div>
    </form>
  );
}