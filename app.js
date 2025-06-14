document.getElementById('theme-toggle').addEventListener('click', () => {
  const t = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', t === 'light' ? 'dark' : 'light');
});

document.getElementById('start-chat').addEventListener('click', () => {
  document.querySelector('main#home').hidden = true;
  document.querySelector('main#chat').hidden = false;
});

// Send placeholder
document.getElementById('send-btn').addEventListener('click', () => {
  const txt = document.getElementById('text-input').value;
  if (!txt) return;
  const msg = document.createElement('div');
  msg.textContent = txt;
  msg.className = 'user-msg';
  document.getElementById('messages').append(msg);
  document.getElementById('text-input').value = '';

  // Placeholder AI reply
  const reply = document.createElement('div');
  reply.textContent = "AI Companion reply goes here.";
  reply.className = 'ai-msg';
  document.getElementById('messages').append(reply);
});
