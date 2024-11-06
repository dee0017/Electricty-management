// Mark as Read Functionality
document.querySelectorAll('.mark-read').forEach(button => {
    button.addEventListener('click', (e) => {
        const notificationItem = e.target.closest('.notification-item');
        notificationItem.classList.remove('unread'); // Remove 'unread' styling
        alert('Notification marked as read.');
    });
});

// Delete Notification Functionality
document.querySelectorAll('.delete-notification').forEach(button => {
    button.addEventListener('click', (e) => {
        const notificationItem = e.target.closest('.notification-item');
        notificationItem.remove(); // Remove the notification from the DOM
        alert('Notification deleted.');
    });
});
