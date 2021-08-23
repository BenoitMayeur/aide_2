
//VERSION 2
$(function () {
  // definition des var et const
  const BUTTON = $("#btn");
  const TARGET = $("#target");
  const URL = "./days.php";
  const METHOD = "GET";

  // fonction d'appel a ajax et traitement du résultat
  function askDayPostCall(param) {
      
          $.ajax({  // POURQUOI ICI FETCH NE FONCTIONNE PAS???? => maintenant ça marche
              type: METHOD,
              url: URL,
              data: {
                  jour: param
              },
              dataType: 'json',
              statusCode: {
                  404: () => {
                      console.error('PAGE NOT FOUND');
                  }
                },
                success: (result) => {
                  console.log(result);
                  TARGET.append('<tr><td>' + result + '</td></tr>');
                },
                error: (data, status, error) => {
                    
                    console.error(data);
                    console.error(error, status);
                },
                timeout: 2000
              
          });

        
  }
  
  // fonction qui recupere la valeur de l'input et fait l'appel a ajax
  function askDay(){
      let input = $("#input").val();
      console.info(`SEQ-1 => Numéro introduit : ${input}`);
      askDayPostCall(input);
  }

  // detecter click et appel de la fonction
  BUTTON.on("click", askDay);
})