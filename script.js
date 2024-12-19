function logWorkout(exercise) {
    const sets = document.getElementById(`${exercise}-sets`);
    const reps = document.getElementById(`${exercise}-reps`);
    
    if (!sets || !reps) {
      alert('One or more input fields are missing.');
      return;
    }
  
    const setsValue = sets.value;
    const repsValue = reps.value;
  
    if (setsValue && repsValue) {
      const progressBar = document.getElementById(`${exercise}-progress`).children[0];
      const progress = (setsValue * repsValue) / 100 * 100; // assuming 100 as max progress
      progressBar.style.width = `${progress}%`;
  
      const message = document.getElementById(`${exercise}-message`);
      message.textContent = `You did great! Keep it up!`;
  
      progressBar.style.backgroundColor = '#32CD32';
    } else {
      alert("Please fill in both sets and reps.");
    }
  }
  