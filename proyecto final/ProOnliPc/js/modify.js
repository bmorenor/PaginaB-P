
selectItem1();
const back = document.getElementById('button-back');

back.addEventListener('click', () => {
  modal_container.classList.remove('show');
  doOpen('receives.php');
});

function doOpen(url) {
  document.location.target = "_blank";
  document.location.href = url;
}



function selectItem1(){
    const selectElement = document.querySelector('#txtSpecies');
    selectElement.addEventListener("change", (event) => {
        var y = document.getElementById("txtSpecies").options;
        var x = document.getElementById("txtSpecies").selectedIndex;
        console.log(y[x].text);
      if (y[x].text!="Please select...") {
            if(y[x].text=="CANINO"){
                selectList();
            }else if(y[x].text=="FELINO"){
                selectList2();
            }
           
        } else {
          
        }
      
    });
}


  function selectList(){

	$(document).ready(function(){
		load_json('txtSize');
		function load_json(id, race_id){
			var html = '';

			$.getJSON('/src/json/sizeCanino.json', function(data){
				html += '<option>Please select... </option>';
				console.log(data);
				if(id == 'txtSize' && race_id == null){
					for(var i = 0; i < data.sizeC.length; i++){
            
						html += '<option value='+ data.sizeC[i].type +'>'+ data.sizeC[i].type+ '</option>';
          
					}
				}else{
					for(var i = 0; i < data.sizeC.length; i++){
						if(data.sizeC[i].type == race_id){
							for(var j = 0; j < data.sizeC[i].races.length; j++){
								html += '<option value='+ data.sizeC[i].type +'>'+data.sizeC[i].races[j]+ '</option>';
							}
						}
					}
				}

				$('#'+id).html(html);
			});
			
		}

		$(document).on('change', '#txtSize', function(){
			var race_id = $(this).val();
			console.log(race_id);
			if(race_id != null){
				load_json('txtRace', race_id);
			}
		});

	});


}
function selectList2(){

	$(document).ready(function(){
		load_json('txtSize');
		function load_json(id, race_id){
			var html = '';

			$.getJSON('/src/json/sizeFelino.json', function(data){
				html += '<option>Please select... </option>';
				console.log(data);
				if(id == 'txtSize' && race_id == null){
					for(var i = 0; i < data.sizeF.length; i++){
            
						html += '<option value='+ data.sizeF[i].type +'>'+ data.sizeF[i].type+ '</option>';
          
					}
				}else{
					for(var i = 0; i < data.sizeF.length; i++){
						if(data.sizeF[i].type == race_id){
							for(var j = 0; j < data.sizeF[i].races.length; j++){
								html += '<option value='+ data.sizeF[i].type +'>'+data.sizeF[i].races[j]+ '</option>';
							}
						}
					}
				}

				$('#'+id).html(html);
			});
			
		}

		$(document).on('change', '#txtSize', function(){
			var race_id = $(this).val();
			console.log(race_id);
			if(race_id != null){
				load_json('txtRace', race_id);
			}
		});

	});


}