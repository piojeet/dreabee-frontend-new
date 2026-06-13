(() => {
    const loggedIn =
      document.cookie.includes('db_session') ||
      localStorage.getItem('db_logged_in') === '1';
  
    const homeLink = loggedIn ? '/dashboard' : '/';
  
    document.querySelectorAll('#gnav-logo, #gfoot-logo').forEach(el => {
      el.href = homeLink;
    });
  
    if (loggedIn) {
      document.querySelectorAll('#gnav-login, #gnav-mob-login').forEach(el => {
        if (el) {
          el.textContent = 'Dashboard';
          el.href = '/dashboard';
        }
      });
    }
  })();
  
  function gdrop(id) {
    const current = document.getElementById(id);
    const isOpen = current.classList.contains('gopen');
  
    document
      .querySelectorAll('.gnav-dd.gopen')
      .forEach(el => el.classList.remove('gopen'));
  
    if (!isOpen) current.classList.add('gopen');
  }
  
  document.addEventListener('click', e => {
    if (!e.target.closest('.gnav-dd')) {
      document
        .querySelectorAll('.gnav-dd.gopen')
        .forEach(el => el.classList.remove('gopen'));
    }
  });
  
  function gmob() {
    document.getElementById('gnav-ham')?.classList.toggle('gopen');
    document.getElementById('gnav-mob')?.classList.toggle('gopen');
  }