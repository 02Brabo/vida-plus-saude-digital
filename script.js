
// JS simples (estudante)
function entrar(){
  var perfil = document.getElementById('perfil').value;
  var cpf = document.getElementById('cpf').value;
  var senha = document.getElementById('senha').value;
  if(cpf.trim()==='' || senha.trim()===''){
    alert('Preencha CPF e Senha');
    return;
  }
  if(perfil==='medico'){
    window.location.href='painel_medico.html';
  }else{
    window.location.href='painel_paciente.html';
  }
}

var horarioEscolhido = '';
function escolherHorario(h){
  horarioEscolhido = h;
  var span = document.getElementById('horario');
  if(span){ span.innerText = h; }
}
function confirmarAgendamento(){
  if(horarioEscolhido===''){
    alert('Selecione um horário.');
  }else{
    alert('Consulta agendada para ' + horarioEscolhido + '!');
    window.location.href='painel_paciente.html';
  }
}
