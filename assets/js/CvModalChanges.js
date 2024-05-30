function changeCvLanguage(language) {
    let imageUrl, downloadUrl;
    if (language === 'fr') {
      imageUrl = 'assets/img/CV.jpg';
      downloadUrl = 'assets/img/CV.pdf';
      // Change button styles
      document.getElementById('btnFr').classList.remove('btn-secondary');
      document.getElementById('btnFr').classList.add('btn-primary');
      document.getElementById('btnEn').classList.remove('btn-primary');
      document.getElementById('btnEn').classList.add('btn-secondary');
    } else if (language === 'en') {
      imageUrl = 'assets/img/Resume.jpg';
      downloadUrl = 'assets/img/Resume.pdf';
      // Change button styles
      document.getElementById('btnEn').classList.remove('btn-secondary');
      document.getElementById('btnEn').classList.add('btn-primary');
      document.getElementById('btnFr').classList.remove('btn-primary');
      document.getElementById('btnFr').classList.add('btn-secondary');
    }
  
    document.getElementById('cvImage').src = imageUrl;
    document.getElementById('downloadCvLink').href = downloadUrl;
  }
  
  // Ajouter des écouteurs d'événements aux boutons de langue
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnFr').addEventListener('click', function() {
      changeCvLanguage('fr');
    });
  
    document.getElementById('btnEn').addEventListener('click', function() {
      changeCvLanguage('en');
    });
  });
  