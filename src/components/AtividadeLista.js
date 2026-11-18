import React from 'react';
import Atividade from './Atividade';

export default function AtividadeLista(props) {
  return (
    <div>
      <div className="row">
        {props.atividades?.map((ativ) => (
          <Atividade
            key={ativ.id}
            ativ={ativ}
            deletarAtividade={props.deletarAtividade}
          />
        ))}
      </div>
    </div>
  );
}