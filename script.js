    
     const images = [
        'download.jpg',
        'download.jpg',
        'download.jpg',
        'download.jpg',
        'download.jpg'
    ];

    
    const listItems = document.querySelectorAll('#fruit-list li');

    listItems.forEach((li, index) => {
        const img = document.createElement('img');
        img.src = images[index];
        img.alt = li.textContent;
        li.appendChild(img); 
    });



let num=12;
let arr=[1,2,12];
console.log(re(arr,num))
    function re(arr,num){
  for(let i=0;i<arr.length;i++){
    if(num==arr[i])
        return num;
  }
  return -1
    }