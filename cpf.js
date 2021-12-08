/*
cpf = 168.995.350-09
----------------------------------------
1 * 10 = 10          #    1 * 11 = 11 <-
6 * 9  = 54          #    6 * 10 = 60
8 * 8  = 64          #    8 *  9 = 72
9 * 7  = 63          #    9 *  8 = 72
9 * 6  = 54          #    9 *  7 = 63
5 * 5  = 25          #    5 *  6 = 30
3 * 4  = 12          #    3 *  5 = 15
5 * 3  = 15          #    5 *  4 = 20
0 * 2  = 0           #    0 *  3 = 0
                     # -> 0 *  2 = 0
         297         #             343
11 - (297 % 11) = 11 # 11 - (343 % 11) = 9
11 > 9 = 0           #
Digito 1 = 0         # Digito 2 = 9
# cpf_valido = '16899535009'

uso:
  <input type="tel" value="12345678909" autofocus
  onblur="valCpf(this)" onkeyup="corCpf(this);"/>
*/

function valCpf(obj){
  if(obj.value == '')
    return false
    if(!validarCPF(obj.value)){
      alert('CPF inválido, verifique e tente novamente.');
      obj.value = "";
    }
}

function corCpf(obj){
  if(obj.value == '')
    return false
  obj.style.color = (!validarCPF(obj.value)) ? 'red' : null // e-mail invalido
}

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
