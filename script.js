// create html elements by using DOM
document.body.innerHTML = `
</div>
<div id="fetchdata">  
</div>
`;
//select the element to display the results
const displayResult = document.getElementById("fetchdata");

//get data from pokemon api link by using template literal

const getData = async () => {
  try {
    let arr= [];
    let result;
   
      const response = await fetch(`https://api.open5e.com/monsters/?limit=100`)
      result = await response.json(); 
    //   let obj=result.results.actions  
    //   let output=result.data
      displayResult.innerHTML +=`
    <div class="container">
    
   slug: ${result.results[0].slug}<br><br>

   legendary desc: ${result.results[0].legendary_desc}<br><br>

   legendary action: ${result.results[0].legendary_actions[0].name}<br><br>
    
   special abilities:-<br>
    name:${result.results[0].special_abilities[0].name},<br>
    desc:${result.results[0].special_abilities[0].desc}<br>
    <br><br>
   </div>
     <div class="large ">
    slug: ${result.results[1].slug}<br>
    walk:${result.results[1].speed.walk}<br>
    dexterity:${result.results[1].dexterity}<br>
    wisdom: ${result.results[1].wisdom}<br>
    actions:${result.results[1].actions[0].name}<br>
    legendary desc: ${result.results[1].legendary_desc}<br><br>

   legendary action: ${result.results[1].legendary_actions[0].name}<br><br>
    
   special abilities:-<br><br>
    name:${result.results[1].special_abilities[0].name},<br>
    desc:${result.results[1].special_abilities[0].desc}<br>
    <br><br>

</div>`
      
   
}catch (error) {
    console.log(error);
  }
  
};

getData();