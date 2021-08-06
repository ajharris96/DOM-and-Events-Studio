function init() {
    const takeoffButton = document.getElementById('takeoff')
    const status = document.getElementById('flightStatus')
    const screen = document.getElementById('shuttleBackground')
    const height = document.getElementById('spaceShuttleHeight')
    const landButton = document.getElementById('landing')
    const abortButton = document.getElementById('missionAbort')
    const upButton = document.getElementById('up')
    const downButton = document.getElementById('down')
    const leftButton = document.getElementById('left')
    const rightButton = document.getElementById('right')
    const rocket = document.getElementById('rocket')

    takeoffButton.addEventListener('click', function () {
        
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (response) {
            let newHeight = parseInt(height.textContent) + 10000

            status.innerText = "Shuttle in flight"
            screen.style.background = 'blue'
            height.textContent = String(newHeight)
        }
    })

    landButton.addEventListener('click', function (){
            window.alert("The shuttle is landing. Landing gear engaged.")
            status.innerText = "The shuttle has landed."
            screen.style.background = 'green'
            height.textContent = "0"
    })

    abortButton.addEventListener('click', function (){
            let response = window.confirm("Confirm that you want to abort the mission.")
            if (response){
                status.innerText = "Mission aborted."
                screen.style.background = "green"
                height.textContent = "0"
            }
    })

    upButton.addEventListener('click', function (){

        let newHeight = parseInt(height.textContent) + 10000

            height.textContent = String(newHeight)

        let numericValue = window.getComputedStyle(
            rocket,null).getPropertyValue('top').match(/\d+/);

        
        let newPosition = parseInt(numericValue[0]) -10
        rocket.style.top = String(newPosition)+"px";
        

    })

    downButton.addEventListener('click', function (){

        let newHeight = parseInt(height.textContent) - 10000

            height.textContent = String(newHeight)
        
        let numericValue2 = window.getComputedStyle(
                rocket,null).getPropertyValue('top').match(/\d+/);
    
            
        let newPosition = parseInt(numericValue2[0]) +10
            rocket.style.top = String(newPosition)+"px";

    })

    leftButton.addEventListener('click', function (){

        
        let numericValue3 = window.getComputedStyle(
                rocket,null).getPropertyValue('left').match(/\d+/);
    
            
        let newPosition = parseInt(numericValue3[0]) -10;

        

        console.log(newPosition)
            rocket.style.left = String(newPosition)+"px";

        if (newPosition <=0){
            
            rocket.style.right = String(newPosition)+"px";
        }

    })

    rightButton.addEventListener('click', function (){

        
        let numericValue4 = window.getComputedStyle(
                rocket,null).getPropertyValue('left').match(/\d+/);
    
            
        let newPosition = parseInt(numericValue4[0]) +10
            rocket.style.left = String(newPosition)+"px";

    })


}



window.addEventListener("load", init);