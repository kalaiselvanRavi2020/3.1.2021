var parentDiv = document.createElement('div');
parentDiv.setAttribute('style', 'padding-top:20px');



let  Kaprekarnumber= document.createElement("div");
Kaprekarnumber.innerHTML=`<label>Kaprekar constant</label><br><input type="text" id="Kaprekarnumber" maxlength=4 style="padding:4px;margin :5px;width=50%"></input>` 
Kaprekarnumber.classList.add('input-elem');
parentDiv.appendChild(Kaprekarnumber);


let button=document.createElement("button");
button.type=button;
button.innerText="check";
button.setAttribute("class","btn");
button.setAttribute("onclick","Kaprekarconstant()");
parentDiv.appendChild(button);

var displayData = document.createElement('div');
        displayData.id = 'display-data';
function myFunction() {
  alert("I am an alert box!");
}


function Kaprekarconstant(){
  let a=document.getElementById("Kaprekarnumber").value;
    if(a!=parseInt(a))
 {
  console.log(a);
  alert("only num")
 }
 else
 {
  displayData.innerHTML = `Given input date is ${a}`;
  let b=a.toString().split("");
   for(i=0;i<b.length;i++)
   {
       b[i]=parseInt(b[i]);
   }
   for(i=0;i<b.length;i++)
  {
  if(b[i]>=b[i+1] && b.length>b[i])
  {
      alert("give number in asscending order");
      break;
     
    }
  else{
   let c=b.join("");
   count=0;
   k(c,b);
  }
}
 }
  }
function k(c,b){
  if(c==6174)
  {
      console.log(count);
  }
  else{
      count++;
      c=max(b)-min(b);
         document.write( `step ${count} the value ${max(b)}-${min(b)}=${c}<br>`);
      d(c);
      
  }
 
}

function d(a){
 let b=a.toString().split("");
 for(i=0;i<b.length;i++)
 {
     b[i]=parseInt(b[i]);
 }
 let c=b.join("");
 k(c,b);
}
function min(a){
  a.sort(function (a,b){
       return a-b;
      });
      a=a.join("");
      return a;
        }
function max(a){
  a.sort(function (a,b){
       return b-a;
       });
   a=a.join("");
   return a;
}     


document.body.appendChild(parentDiv);
document.body.appendChild(displayData);    