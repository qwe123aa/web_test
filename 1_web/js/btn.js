function btn_theme(self){
    var target = document.querySelector('body')
    if(self.value === 'day'){
        target.className='night'
        self.value='night'
        document.getElementById("imgId").src="img/logo_night.jpg";
    }
    else{
        target.className='day'
        self.value='day'
        document.getElementById("imgId").src="img/logo_day.jpg";
    }
}