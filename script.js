let dollar=document.getElementById('dollarOutput');
let euro=document.getElementById('euroOutput');
let rubl=document.getElementById('rublOutput');
let funt=document.getElementById('funtOutput');
let input=document.getElementById('currencyInput');

// resultDollar=input.value/10730; 



input.addEventListener('keyup',filterItems);
function filterItems(e){
    let txt=e.target.value;
    // console.log(txt);
    let items=document.getElementsByClassName('card-block');
    // console.log(items);
    Array.from(items).forEach((item)=>{
        let itemName=item.firstChild.textContent;
        resultDollar=input.value/10730;
        resultRubl=input.value/145;
        resultEuro=input.value/12130;
        resultFunt=input.value/14444;
        // console.log(resultDollar);
        if(resultDollar!=0){
            dollar.textContent=resultDollar;
            euro.textContent=resultEuro;
            rubl.textContent=resultRubl;
            funt.textContent=resultFunt;
            
            item.style.display='block';
        }
       
        
    })
}