document.addEventListener('DOMContentLoaded', function () {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const addTaskButton = document.getElementById('add-task');

    function fetchTasks() {
        fetch('/tasks')
            .then(response => response.json())
            .then(data => {
                taskList.innerHTML = '';
                data.tasks.forEach(task => {
                    const taskItem = document.createElement('li');
                    taskItem.className = 'list-group-item d-flex justify-content-between align-items-start';
                    taskItem.innerHTML = `
                        <div class="ms-2 me-auto">
                            <div class="fw-bold">${task.title}</div>
                            <p>${task.description || 'Sin descripción'}</p>
                            <small class="text-muted">Creada: ${task.created_at}</small>
                        </div>
                        <div>
                            <button class="btn btn-sm btn-outline-success me-2" onclick="markTask(${task.id}, ${!task.completed})">
                                ${task.completed ? 'Desmarcar' : 'Completar'}
                            </button>
                            <button class="btn btn-sm btn-outline-danger" onclick="deleteTask(${task.id})">Eliminar</button>
                        </div>
                    `;
                    if (task.completed) {
                        taskItem.classList.add('list-group-item-success');
                    }
                    taskList.appendChild(taskItem);
                });
            })
            .catch(error => console.error('Error al obtener las tareas:', error));
    }

    //NuTarea
    addTaskButton.addEventListener('click', function () {
        const title = titleInput.value.trim();
        const description = descriptionInput.value.trim();

        if (!title) {
            alert('El título de la tarea es obligatorio.');
            return;
        }

        fetch('/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, description })
        })
            .then(response => response.json())
            .then(data => {
                if (data.task) {
                    titleInput.value = '';
                    descriptionInput.value = '';
                    fetchTasks();
                }
            })
            .catch(error => console.error('Error al crear la tarea:', error));
    });

    // Completa
    window.markTask = function (taskId, completed) {
        fetch(`/tasks/${taskId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ completed })
        })
            .then(response => response.json())
            .then(data => {
                if (completed) {
                    triggerConfetti();
                }
                fetchTasks();
            })
            .catch(error => console.error('Error al actualizar la tarea:', error));
    };

    // Elimina
    window.deleteTask = function (taskId) {
        fetch(`/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => fetchTasks())
            .catch(error => console.error('Error al eliminar la tarea:', error));
    };

    //Confeti
    function triggerConfetti() {
        const duration = 2 * 1000; // 2 segundos
        const end = Date.now() + duration;

        const interval = setInterval(function () {
            if (Date.now() > end) {
                clearInterval(interval);
                return;
            }

            confetti({
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: {
                    x: Math.random(),
                    y: Math.random() - 0.2 // Confeti se lanza ligeramente más arriba
                }
            });
        }, 200);
    }
    fetchTasks();
});
