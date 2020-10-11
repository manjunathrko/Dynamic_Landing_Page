//DOM Elements
const time=document.getElementById("time"),
    greetings=document.getElementById("greetings"),
    name=document.getElementById("name"),
    focus=document.getElementById("focus");

    // options AM or PM
    const showAmPm=true;

    //Create Function to show time

    function showTime(){
        // let today=new Date(2020,06,10,08,33,30);{Testing purpose}
        let today=new Date(),
        date=today.getDate(),
        hour=today.getHours(),
        min=today.getMinutes(),
        sec=today.getSeconds();

        //Set AM or PM using ternanary operator(Shortend)
        const amPm=hour >= 12 ? 'PM' :'AM' ;

    //12 hour format
    hour = hour % 12 || 12;
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm :''}`;
    setTimeout(showTime,1000);   

    }
    //Add zero to seconds
    function addZero(n){
        return (parseInt(n,10)< 10 ? '0' : '') +n;
    }
    //set Background and Greetings
    function setBgGreet(){
        let today=new Date(),
        
        // let today=new Date(2020,06,10,19,33,30),{Testing purpose}
        hour=today.getHours();

        if(hour < 12){
            //Morning
            document.body.style.backgroundImage="url('../img/morning.jpeg')";
            greetings.textContent="Good Morning";
            document.body.style.color='white';
            
        }else if(hour < 18){
            //Afternoon
            document.body.style.backgroundImage="url('../img/Afternoon.jpeg')";
            greetings.textContent="Good Afternoon";
            document.body.style.color='Blue';
        }else{
            //Evening
            document.body.style.backgroundImage="url('../img/night.jpeg')";
            greetings.textContent="Good Night";
            document.body.style.color='white';
            
        }
    }
    //Get Name
    function getName(){
        if(localStorage.getItem('name')==null){
            name.textContent='[Enter Name]';
        }else{
            name.textContent=localStorage.getItem('name');
        }
    }
    //Set Name
    function setName(e){
        if(e.type==='keypress'){
            //Make sure enter is pressed
            if(e.which==13 || e.keycode==13){
                localStorage.setItem('name',e.target.innerText);
                name.blur();
            }
        }else{
            localStorage.setItem('name',e.target.innerText);

            
        }

    }
    //Get Focus
    function getFocus(){
        if(localStorage.getItem('focus')==null){
            focus.textContent='[Enter Focus]';
        }else{
            focus.textContent=localStorage.getItem('focus');
        }
    }
    //Set Focus
    function setFocus(e){
        if(e.type==='keypress'){
            //Make sure enter is pressed
            if(e.which==13 || e.keycode==13){
                localStorage.setItem('focus',e.target.innerText);
                focus.blur();
            }
        }else{
            localStorage.setItem('focus',e.target.innerText);

            
        }

    }
    name.addEventListener('keypress',setName);
    name.addEventListener('blur',setName);
    focus.addEventListener('keypress',setFocus);
    focus.addEventListener('blur',setFocus);


    //Run
    showTime();
    setBgGreet();
    getName();
    getFocus();