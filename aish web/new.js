

window.onload = function() {
    activateSkills()
}

function activateSkills() {
    animateSkillBar('htmlSkill', 90); // 90% skill level for HTML
    animateSkillBar('cssSkill', 80);  // 80% skill level for CSS
    animateSkillBar('jsSkill', 70);   // 70% skill level for JavaScript
    animateSkillBar('cppSkill', 70);   // 70% skill level for CPP
  
  
}

function animateSkillBar(elementId, targetWidth) {
    let skillBar = document.getElementById(elementId);
    let width = 0
    let interval = setInterval(frame, 20); // Update progress every 20ms

    function frame() {
        if (width >= targetWidth) {
            clearInterval(interval);
        } else {
            width++;
            skillBar.style.width = width + '%';
            skillBar.innerHTML = width + '%';
        }
    }
}