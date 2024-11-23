const copyEmailAddress = (email) => {
    navigator.clipboard.writeText(email)
    .then(() => {
        alert('Email copied to clipboard!')
    })
    .catch((error) => {
        console.error('Failed to copy text: ', error);
    });
};

window.addEventListener('scroll', () => {
    const homeBtn = document.getElementById('home-btn');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 1000) {
      homeBtn.classList.add('show');
    } else {
      homeBtn.classList.remove('show');
    }
  });