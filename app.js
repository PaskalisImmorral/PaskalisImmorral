function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(
        b => b.addEventListener('click' , showMore));
    function showMore(e){
        let profile = e.target.parentElement;    
        let isActive = profile.querySelector
    ('input[type="radio"][value="unlock"]').checked;
        if (isActive){
        let div = profile.querySelector('div');
        if (e.target.textContent == 'Show more'){
         e.target.textContent = 'Hide it'
        div.style.display = 'block';
        } else {
           e.target.textContent = 'Show more';
           div.style.display = 'none';
       }
   }
}
}