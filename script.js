const wrapper = document.querySelector('.wrapper'),
qrInput = wrapper.querySelector('.form input'),
generateBtn = wrapper.querySelector('.form button'),
qrImg = wrapper.querySelector('.qr-code img');


generateBtn.addEventListener('click', () =>{
    let qrValue = qrInput.value 
    if(!qrValue) return; // if input is empty return nothing i.e no qr code is generated
    generateBtn.innerText = 'Generating QR Code...'
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
    qrImg.addEventListener('load', ()=>{
        wrapper.classList.add('active');
        generateBtn.innerText = 'Generate QR Code';
    })
    
    
});


qrInput.addEventListener('keyup', ()=>{
    if(!qrInput.value){
        wrapper.classList.remove('active')
    }
})
