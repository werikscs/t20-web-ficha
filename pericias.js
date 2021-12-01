let arrayNomePericias = ['Acrobacia','Adestramento','Atletismo',
                         'Atuação','Cavalgar','Conhecimento',
                         'Cura','Diplomacia','Enganação',
                         'Fortitude','Guerra','Iniciativa',
                         'Intimidação','Intuição','Investigação',
                         'Jogatina','Ladinagem','Luta',
                         'Misticismo','Nobreza','Ofício',
                         'Percepção','Pilotagem','Pontaria',
                         'Reflexos','Religião','Sobrevivência',
                         'Vontade']

carregarPericias()

function carregarPericias(){
   for(let i = 0; i < arrayNomePericias.length; i++){
      createPericia(arrayNomePericias[i])
   }
}

function createPericia(nomePericia){
   // Pega a referencia da lista de pericias pelo id
   let listaPericias = document.querySelector('#lista-pericias')
   // cria uma div que será um item da lista de pericias (uma pericia)
   let divPericia = document.createElement('div')
   // cria o atributo class para a nova div
   divPericia.setAttribute('class','grid-pericia')

   for(let i = 0; i < 11; i++){
      // cria uma div que será filha da divPericia
      let divLabelCenter = document.createElement('div')
      divLabelCenter.setAttribute('class','label-pericia')
      // adiciona a div como filha
      if(i%2 === 0){
         divLabelCenter.append(createInput(i,nomePericia))
      }
      else{
         divLabelCenter.innerHTML = createTextLabelCenter(i,nomePericia)
      }

      divPericia.append(divLabelCenter)
      listaPericias.append(divPericia)
   }   
}

function createInput(i,nomePericia){
   let input = document.createElement('input')
   input.setAttribute('class','input-pericia')
   switch(i){
      case 0:
         input.setAttribute('class','input-pericia-checkbox')
         input.setAttribute('type','checkbox')
         input.setAttribute('id',`check-${nomePericia}`)
         input.setAttribute('name',`check-${nomePericia}`)
         break
      case 2:
         input.setAttribute('type','number')
         input.setAttribute('id',`total-${nomePericia}`)
         input.setAttribute('name',`total-${nomePericia}`)
         input.setAttribute('value',``)
         input.setAttribute('readonly',`true`)
         break
      case 4:
         input.setAttribute('type','number')
         input.setAttribute('id',`meio-${nomePericia}`)
         input.setAttribute('name',`meio-${nomePericia}`)
         input.setAttribute('value',``)
         break
      case 6:
         input.setAttribute('type','number')
         input.setAttribute('id',`mod-${nomePericia}`)
         input.setAttribute('name',`mod-${nomePericia}`)
         input.setAttribute('value',``)
         break
      case 8:
         input.setAttribute('type','number')
         input.setAttribute('id',`treino-${nomePericia}`)
         input.setAttribute('name',`treino-${nomePericia}`)
         input.setAttribute('value',``)
         break
      case 10:
         input.setAttribute('type','number')
         input.setAttribute('id',`outros-${nomePericia}`)
         input.setAttribute('name',`outros-${nomePericia}`)
         input.setAttribute('value',``)
         break
   }
   return input
}

function createTextLabelCenter(i,nomePericia){
   // cria uma div que será filha da divPericia
   let text = ''

   switch(i){
      case 1:
         text = nomePericia
         break
      case 3:
         text = '='
         break
      case 5:
      case 7:
      case 9:
         text = '+'
         break
   }
   return text
}