window.onload = () => {
    const index= document.getElementById('run-for-loop');

    index.onclick = () => {
        const index  = document.getElementById('my-list');
            // WRAP THE NEXT LINE IN A for-loop that iterates over a variable named i. 
            // The loop should iterate 5 times (count from zero to five).
            for (let i = 0; i < 5; i++) {
                console.log(i);
            }
            
            // END LOOP
    }
}                    
        