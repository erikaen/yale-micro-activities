// ===== SHARED JS — Yale Micro Activities =====
// Utilities for accordion, reveal, and MCQ interactions.

// ===== ACCORDION =====
function toggleAccordion(el) {
  var section = el.closest('.accordion-section');
  section.classList.toggle('open');
}

function initAccordions(openFirst) {
  var sections = document.querySelectorAll('.accordion-section');
  if (openFirst && sections.length > 0) {
    sections[0].classList.add('open');
  }
}

// ===== REVEAL =====
function toggleReveal(btn) {
  var wrapper = btn.closest('[data-reveal]') || btn.parentElement;
  var content = wrapper.querySelector('.reveal-content');
  if (!content) return;
  var isOpen = content.classList.toggle('open');
  btn.textContent = isOpen ? 'Hide answer' : 'Show answer';
}

// ===== MULTIPLE CHOICE =====
function selectChoice(btn, isCorrect, feedbackCorrect, feedbackIncorrect) {
  // Disable all choices in this question block
  var block = btn.closest('[data-question]') || btn.closest('.card') || btn.parentElement.parentElement;
  var allBtns = block.querySelectorAll('.choice-btn');
  allBtns.forEach(function(b) {
    b.disabled = true;
    b.style.cursor = 'default';
  });

  btn.classList.add(isCorrect ? 'correct' : 'incorrect');

  var fb = block.querySelector('.feedback');
  if (fb) {
    fb.textContent = isCorrect ? (feedbackCorrect || 'Correct!') : (feedbackIncorrect || 'Not quite — review the explanation above.');
    fb.className = 'feedback show ' + (isCorrect ? 'correct' : 'incorrect');
  }
}
