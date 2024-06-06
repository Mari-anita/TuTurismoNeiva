document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.rating input').forEach(input => {
      input.addEventListener('change', () => {
        let rating = input.id.replace('star', '');
        console.log('Rating:', rating);
        // Save the rating (simulated here with console.log)
      });
    });
  
    document.querySelector('.favorite').addEventListener('click', (event) => {
      event.target.classList.toggle('selected');
      console.log('Favorite status:', event.target.classList.contains('selected'));
      // Save the favorite status (simulated here with console.log)
    });
  });
  