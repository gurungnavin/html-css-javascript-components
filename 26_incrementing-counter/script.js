// Select all elements with the class 'counter'
const counters = document.querySelectorAll('.counter');

// Loop through each counter
counters.forEach(counter => {
    // Set the initial text to '0'
    counter.innerText = '0';

    // Function to update the counter
    const updateCounter = () => {
        // Get the target value from the data-target attribute
        const target = Number(counter.getAttribute('data-target'));
        console.log("target value : " + target);
        
        
        // Convert the current counter text to a number
        const currentValue = Number(counter.innerText);
        console.log("current value : " + currentValue);
        
        // Calculate the increment value (the higher the divisor, the slower the count)
        const increment = target / 80;
        
        console.log("increment : " + increment);
        

        // Check if we've reached the target value
        if (currentValue < target) {
            // Increase the counter by the increment value and update the text
            counter.innerText = Math.ceil(currentValue + increment);

            // Call updateCounter again to keep the animation going
            setTimeout(updateCounter, 20); // 10 milliseconds delay for smoother animation
        } else {
            // If the target is reached, ensure the exact value is displayed
            counter.innerText = target;
        }
    };

    // Start updating the counter
    updateCounter();
});
