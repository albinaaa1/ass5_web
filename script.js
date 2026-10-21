// --- Navigation Tabs ---
function switchTab(tabId, event) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));

  document.getElementById(tabId).classList.add('active');
  if (event && event.target) {
    event.target.classList.add('active');
  }
}

// --- Task 0 & 1: Fundamentals ---
const studentName = "Onglassyn Albina ";
const studentGroup = "SE-2527";
const isEnrolled = true;
const numA = 24;
const numB = 6;

// Outputting required assignment details to console
console.log("Student Name:", studentName);
console.log("Student Group:", studentGroup);

function logToTerminal(msg) {
  const term = document.getElementById('terminal-output');
  if (term) {
    term.innerHTML += `<div class="terminal-line"><span class="terminal-prefix">console > </span>${msg}</div>`;
  }
}

// Write tasks 0-1 details to custom UI terminal on load
window.addEventListener('DOMContentLoaded', () => {
  logToTerminal(`Name: ${studentName} | Group: ${studentGroup}`);
  logToTerminal(`Data Types: string ("${studentName}"), number (${numA}), boolean (${isEnrolled})`);
  logToTerminal(`Arithmetic: ${numA} + ${numB} = ${numA + numB}`);
  logToTerminal(`Concatenation: "Hello " + "${studentName}" = Hello ${studentName}`);
  renderTodos();
});

function runTask0Alert() {
  alert("Hello, JavaScript World!");
}

// --- Task 2: DOM Change Content ---
function changeContent() {
  const p = document.getElementById('target-paragraph');
  p.textContent = "Paragraph content has been dynamically updated via JS DOM manipulation!";
  p.style.color = "var(--accent-secondary)";
}

// --- Task 3: DOM Change Styles ---
let isColorChanged = false;
let isFontLarge = false;

function toggleBoxColor() {
  const box = document.getElementById('style-box');
  isColorChanged = !isColorChanged;
  box.style.background = isColorChanged ? 'rgba(99, 102, 241, 0.3)' : 'rgba(255, 255, 255, 0.05)';
  box.style.borderColor = isColorChanged ? 'var(--accent-primary)' : 'var(--card-border)';
}

function toggleBoxFont() {
  const box = document.getElementById('style-box');
  isFontLarge = !isFontLarge;
  box.style.fontSize = isFontLarge ? '1.4rem' : '1rem';
  box.style.color = isFontLarge ? 'var(--accent-secondary)' : 'var(--text-main)';
}

// --- Task 4: Creating & Removing Elements ---
let itemCount = 1;

function addItem() {
  itemCount++;
  const list = document.getElementById('dynamic-list');
  const li = document.createElement('li');
  li.innerHTML = `<span>Dynamic List Item #${itemCount}</span>`;
  list.appendChild(li);
}

function removeItem() {
  const list = document.getElementById('dynamic-list');
  if (list && list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

// --- Task 5: Mouse Events ---
document.addEventListener('DOMContentLoaded', () => {
  const mouseBox = document.getElementById('mouse-box');
  if (mouseBox) {
    mouseBox.addEventListener('mouseover', () => {
      mouseBox.style.background = 'rgba(16, 185, 129, 0.2)';
      mouseBox.style.borderColor = 'var(--accent-success)';
      mouseBox.textContent = 'Mouse is OVER the box!';
    });

    mouseBox.addEventListener('mouseout', () => {
      mouseBox.style.background = 'rgba(255, 255, 255, 0.05)';
      mouseBox.style.borderColor = 'var(--card-border)';
      mouseBox.textContent = 'Hover over this box';
    });
  }

  // --- Task 6: Keyboard Events ---
  const keyInput = document.getElementById('keyboard-input');
  const keyOutput = document.getElementById('keyboard-output');

  if (keyInput && keyOutput) {
    keyInput.addEventListener('keyup', (e) => {
      keyOutput.textContent = e.target.value || '-';
    });
  }
});

// --- Task 7: Calculator ---
function calculate(op) {
  const val1 = parseFloat(document.getElementById('calc-num1').value) || 0;
  const val2 = parseFloat(document.getElementById('calc-num2').value) || 0;
  let res = 0;

  if (op === '+') res = val1 + val2;
  else if (op === '-') res = val1 - val2;
  else if (op === '*') res = val1 * val2;
  else if (op === '/') res = val2 !== 0 ? (val1 / val2).toFixed(2) : 'Cannot divide by 0';

  document.getElementById('calc-result').textContent = res;
}

// --- Task 8: To-Do App ---
let todos = [
  { id: 1, title: 'Assignment 6', desc: 'Complete assignment on time', completed: false }
];

function renderTodos() {
  const container = document.getElementById('todo-list-container');
  if (!container) return;

  if (todos.length === 0) {
    container.innerHTML = '<div class="empty-state">No tasks available. Add a new task to get started!</div>';
    return;
  }

  container.innerHTML = todos.map(todo => `
    <div class="todo-card ${todo.completed ? 'completed' : ''}">
      <div>
        <div class="todo-title">${escapeHtml(todo.title)}</div>
        <div class="todo-desc">${escapeHtml(todo.desc)}</div>
      </div>
      <div class="todo-actions">
        <button class="action-icon" onclick="toggleTodo(${todo.id})" title="Mark Completed">
          ${todo.completed ? '↩' : '✓'}
        </button>
        <button class="action-icon delete" onclick="deleteTodo(${todo.id})" title="Delete Task">✕</button>
      </div>
    </div>
  `).join('');
}

function addTodo() {
  const titleInput = document.getElementById('todo-title-input');
  const descInput = document.getElementById('todo-desc-input');

  const title = titleInput.value.trim();
  const desc = descInput.value.trim();

  if (!title) {
    alert('Please enter a task title.');
    return;
  }

  todos.push({
    id: Date.now(),
    title,
    desc,
    completed: false
  });

  titleInput.value = '';
  descInput.value = '';
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  renderTodos();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}