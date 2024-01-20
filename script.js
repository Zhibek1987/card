const nameInput = document.querySelector('.visa');
const bigInput = document.querySelector('.visa-one');
const smallInput = document.querySelector('.visa-two');
const fatInput = document.querySelector('.visa-three');
const cardBlock = document.querySelector('.card-block1')
const saveBtn = document.querySelector('.dell3');
saveBtn.addEventListener('click',()=>{
    let obj = {
        name:nameInput.value,
        big:bigInput.value,
        small:smallInput.value,
        fat:fatInput.value,

    }

    let kluch = JSON.parse(localStorage.getItem('miftah')) || []
    kluch.push(obj)
    localStorage.setItem('miftah',JSON.stringify(kluch))
    info()
})

function info(){
    cardBlock.innerHTML=''
    let kluch = JSON.parse(localStorage.getItem('miftah')) || []
    kluch.forEach(element => {
        const block=document.createElement('div')
        block.setAttribute('class','block')
    cardBlock.append(block)
    block.innerHTML=`
    <div class="card-block">
                <div class="logo"><img src="./img/logo cart.png" alt="" class="logo">
                    <div class="logo2"><img src="./img/dell.png" alt="" class="dell">
                        <img src="./img/pen.png" alt="" class="pen">
                    </div>
                </div>
                <p class="number">5142-8164-6526-2363</p>
                <div class="name">
                    <p class="ism">Name</p>
                    <p class="ism2">Valid Till</p>
                </div>
                <div class="ism3">
                    <h3 class="jj">Janner Anne</h3>
                    <h1 class="rokm">05/43</h1>
                </div> 
                </div>
                `
    });    
}