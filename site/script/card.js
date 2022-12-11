// чисто для наглядности
// чтобы было понятно, этот код заставляет проигрываться анимации на карточках также, как и код в файле scriptcard. 1 свойство освобождает меня от 200 строк кода, круто, да?
let cardAccumulator = document.querySelectorAll('.card-accumulator')
let spanCard = document.querySelectorAll('.span-card')
let format0 = document.querySelector('#format0')
let format1 = document.querySelector('#format1')
let format2 = document.querySelector('#format2')
let format3  = document.querySelector('#format3')
let format4  = document.querySelector('#format4')
let format5  = document.querySelector('#format5')
let format6  = document.querySelector('#format6')
let format7  = document.querySelector('#format7')
let format8  = document.querySelector('#format8')
let format9  = document.querySelector('#format9')
let format10  = document.querySelector('#format10')
let format11  = document.querySelector('#format11')
let format12  = document.querySelector('#format12')
let format13  = document.querySelector('#format13')
let format14  = document.querySelector('#format14')
let format15  = document.querySelector('#format15')







for(let card of cardAccumulator){
  card.addEventListener('mouseover', function(){
    if(card.id === 'card1'){
      for (let s0 of span0)
    s0.classList = `span-card-visible0`
    format0.classList = 'span-format-visible0'
  }
    else if(card.id === 'card2'){
      for (let s1 of span1)
      s1.classList = 'span-card-visible0'
      format1.classList = 'span-format-visible0'
    }
    else if(card.id === 'card3'){
      for(let s2 of span2)
      s2.classList = 'span-card-visible0'
      format2.classList = 'span-format-visible0'
    }
    else if(card.id === 'card4'){
      for (let s3 of span3)
      s3.classList = 'span-card-visible0'
      format3.classList = 'span-format-visible0'
    }
   else if(card.id === 'card5'){
    for(let s4 of span4)
      s4.classList = 'span-card-visible0'
      format4.classList = 'span-format-visible0'
    }

    else if(card.id === 'card6'){
      for(let s5 of span5)
      s5.classList = 'span-card-visible0'
      format5.classList = `span-format-visible0`
    
        }
      else if(card.id === 'card7'){
      for(let s6 of span6)
      s6.classList = 'span-card-visible0'
      format6.classList = `span-format-visible0`
      
        }
      else if(card.id === 'card8'){
      for(let s7 of span7)
      s7.classList = 'span-card-visible0'
      format7.classList = `span-format-visible0`
        
       }
      else if(card.id === 'card9'){
      for(let s8 of span8)
      s8.classList = 'span-card-visible0'
      format8.classList = `span-format-visible0`
          
        }
      else if(card.id === 'card10'){
      for(let s9 of span9)
      s9.classList = 'span-card-visible0'
      format9.classList = `span-format-visible0`
            
      }
      else if(card.id === 'card11'){
        for(let s10 of span10)
        s10.classList = 'span-card-visible0'
        format10.classList = `span-format-visible0`
              
      }
      else if(card.id === 'card12'){
        for(let s11 of span11)
        s11.classList = 'span-card-visible0'
        format11.classList = `span-format-visible0`
              
      }
      else if(card.id === 'card13'){
        for(let s12 of span12)
        s12.classList = 'span-card-visible0'
        format12.classList = `span-format-visible0`
              
      }
      else if(card.id === 'card14'){
        for(let s13 of span13)
        s13.classList = 'span-card-visible0'
        format13.classList = `span-format-visible0`
              
      }
      else if(card.id === 'card15'){
        for(let s14 of span14)
        s14.classList = 'span-card-visible0'
        format14.classList = `span-format-visible0`
              
      }
      else if(card.id === 'card16'){
        for(let s15 of span15)
        s15.classList = 'span-card-visible0'
        format15.classList = `span-format-visible0`
              
      }
    else{false}
  })
  card.addEventListener('mouseout', function(){
    if(card.id === 'card1'){
      for (let s0 of span0)
      s0.classList = 'span-card0'
    format0.classList = `span-format0`
    }
   else if(card.id === 'card2'){
    for (let s1 of span1)
      s1.classList = 'span-card1'
    format1.classList = `span-format0`
    }
  else if(card.id === 'card3'){
    for(let s2 of span2)
      s2.classList = 'span-card2'
    format2.classList = `span-format0`
    }
  else if(card.id === 'card4'){
    for (let s3 of span3)
    s3.classList = 'span-card3'
    format3.classList = `span-format0`}
  else if(card.id === 'card5'){
    for(let s4 of span4)
    s4.classList = 'span-card0'
    format4.classList = `span-format0`

    }
    else if(card.id === 'card6'){
    for(let s5 of span5)
    s5.classList = 'span-card0'
    format5.classList = `span-format0`
  
      }
    else if(card.id === 'card7'){
    for(let s6 of span6)
    s6.classList = 'span-card0'
    format6.classList = `span-format0`
    
      }
    else if(card.id === 'card8'){
    for(let s7 of span7)
    s7.classList = 'span-card0'
    format7.classList = `span-format0`
      
     }
    else if(card.id === 'card9'){
    for(let s8 of span8)
    s8.classList = 'span-card0'
    format8.classList = `span-format0`
        
      }
    else if(card.id === 'card10'){
    for(let s9 of span9)
    s9.classList = 'span-card0'
    format9.classList = `span-format0`
          
    }
    else if(card.id === 'card11'){
    for(let s10 of span10)
    s10.classList = 'span-card0'
    format10.classList = `span-format0`
              
      }
    else if(card.id === 'card12'){
    for(let s11 of span11)
    s11.classList = 'span-card0'
    format11.classList = `span-format0`
              
      }
    else if(card.id === 'card13'){
    for(let s12 of span12)
    s12.classList = 'span-card0'
    format12.classList = `span-format0`
              
      }
    else if(card.id === 'card14'){
    for(let s13 of span13)
    s13.classList = 'span-card0'
    format13.classList = `span-format0`
              
      }
    else if(card.id === 'card15'){
    for(let s14 of span14)
    s14.classList = 'span-card0'
    format14.classList = `span-format0`
              
      }
    else if(card.id === 'card16'){
    for(let s15 of span15)
    s15.classList = 'span-card0'
    format15.classList = `span-format0`
              
      }
    else{false}
  })}
