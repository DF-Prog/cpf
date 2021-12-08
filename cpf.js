function validarCPF(cpf){
  cpf = (cpf+'').replace(/[^0-9]/g, '');// só números
  if (cpf.length != 11) 
    return false

  for (let contador = 0; contador <= 9; contador++) {
    if (cpf == (contador+'').repeat(11))// sequências repetidas 0..9
      return false
  }      

  loop = 11
  dv1 = 0
  dv2 = 0
  for (let contador = 0; contador < 10; contador++) {        
    if(contador < 9)
      dv1 += parseInt(cpf.substr(contador,1)) * (loop-1)
      dv2 += parseInt(cpf.substr(contador,1)) * loop
      loop -= 1
  }
  dv1 = 11 - (dv1 % 11)
  dv1 = dv1 > 9 ? 0 : dv1
  dv2 = 11 - (dv2 % 11)
  dv2 = dv2 > 9 ? 0 : dv2
  return ((dv1+''+dv2) == cpf.substr(9,2))
}
