window.addEventListener('load', solve);

function solve() {
    let modelInput = document.getElementById('model');
    let yearInput = document.getElementById('year');
    let descriptionInput = document.getElementById('description');
    let priceInput = document.getElementById('price');
    let buttonAdd = document.getElementById('add');
    let tBody = document.getElementById('furniture-list');
    let totalPrice = document.querySelector('.total-price');
    let priceOfBought = 0;
    buttonAdd.addEventListener('click', addFunction);



    function addFunction(e){
        e.preventDefault();
        let model = modelInput.value;
        let price = Number(priceInput.value);
        let year =  Number(yearInput.value);
        let description = descriptionInput.value;
        let trInfo = document.createElement('tr');
        let tdModel = document.createElement('td');
        let tdPrice = document.createElement('td');
        let tdButtons = document.createElement('td');
        let buttonMoreInfo = document.createElement('button');
        let buttonBuy = document.createElement('button');
        let trHide = document.createElement('tr');
        let tdYear = document.createElement('td');
        let tdDescription = document.createElement('td');

        modelInput.textContent = '';
        priceInput.textContent = '';
        yearInput.textContent = '';
        descriptionInput.textContent = '';

        buttonMoreInfo.textContent = 'More Info';
        buttonBuy.textContent = 'Buy it';
        tdButtons.appendChild(buttonMoreInfo);
        tdButtons.appendChild(buttonBuy);
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdButtons);
        tBody.appendChild(trInfo);
        tdModel.textContent = model;
        tdPrice.textContent = price.toFixed(2);
        
        buttonMoreInfo.classList.add('moreBtn');
        
        buttonBuy.classList.add('buyBtn');
        
        
        buttonMoreInfo.addEventListener('click', showMore);
        buttonBuy.addEventListener('click', buyFunction);
        function buyFunction(e){
            priceOfBought += Number(tdPrice.textContent); 
            totalPrice.textContent = priceOfBought.toFixed(2);
            trInfo.remove();
            trHide.remove();
        }
    
    function showMore(e){
        
        
        trHide.classList.add('hide');
        trHide.style.display = 'contents';
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);
        tBody.appendChild(trHide);
        tdYear.textContent = 'Year: ' + year;
        tdDescription.textContent = 'Description: ' + description;
        tdDescription.setAttribute('colspan',3);
        if(buttonMoreInfo.textContent == 'More Info'){
            buttonMoreInfo.textContent = 'Less Info';
        } else if (buttonMoreInfo.textContent == 'Less Info'){
            buttonMoreInfo.textContent = 'More Info';
            trHide.style.display = 'none';
        }
    }
}
}
