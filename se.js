function downloadText() {
    const input = document.getElementById('input').value;
    const blob = new Blob([input], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'input.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// AWF Field Notes style: keep interactions quick, clear, and easy for a beginner to understand and edit.

document.addEventListener('DOMContentLoaded', function () {
  var menuButton = document.querySelector('.menu-toggle');
  var navigation = document.querySelector('.main-nav');
  var menuIcon = document.querySelector('.menu-icon');

  if (menuButton && navigation) {
    menuButton.addEventListener('click', function () {
      var isOpen = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', isOpen);
      menuIcon.textContent = isOpen ? '×' : '☰';
    });

    navigation.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navigation.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuIcon.textContent = '☰';
      });
    });
  }

  var chapters = [
    {
      label: '01 / THE MISSION',
      title: 'A stronger future starts with a place to learn.',
      copy: 'AWF is an NGO working for quality education in rural Pakistan—and using an open repository to help students understand how GitHub can become part of their learning journey.'
    },
    {
      label: '02 / THE METHOD',
      title: 'Make the work visible. Make the next step clear.',
      copy: 'The website pairs stories, project imagery, and accessible calls to action so supporters, educators, and students can see the work behind the mission.'
    },
    {
      label: '03 / THE INVITATION',
      title: 'Contribute a skill, a story, or a little time.',
      copy: 'Explore the repository, share an improvement, or bring the same spirit of practical learning to your own classroom and community.'
    }
  ];

  var chapterButtons = document.querySelectorAll('[data-chapter]');
  var chapterLabel = document.querySelector('#chapter-label');
  var chapterTitle = document.querySelector('#chapter-title');
  var chapterCopy = document.querySelector('#chapter-copy');

  chapterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var chapterNumber = Number(button.getAttribute('data-chapter'));
      var chapter = chapters[chapterNumber];

      chapterButtons.forEach(function (item) {
        item.classList.remove('active');
      });
      button.classList.add('active');

      chapterLabel.textContent = chapter.label;
      chapterTitle.textContent = chapter.title;
      chapterCopy.textContent = chapter.copy;
    });
  });
});
