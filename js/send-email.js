const notifications = document.querySelector(".notifications");

// Toast Notification Info
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Email sent successfully !!!',
    },
}

// Function to Remove Toast Notification
const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId)     clearTimeout(toast.timeoutId);  // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500);                  // Removing the toast after 500ms
}

// Function to Create Toast Notification
const createToast = (id) => {
    
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");             // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`;                        // Setting the classes for the toast
    
    // Setting the inner HTML for the toast
    toast.innerHTML = `
                        <div class="column">
                            <i class="fa-solid ${icon}"></i>
                            <span>${text}</span>
                        </div>
                        <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>
                    `;

    notifications.appendChild(toast);                       // Append the toast to the notification ul
    
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}


function sendEmail() {
    
    const userName = document.getElementById("name").value;
    const userEmail = document.getElementById("email").value;
    const userMsg = document.getElementById("msg").value;

    const mailBody =    `
                            <div>
                                <p><b>User Name: ${userName}</b></p>
                                <p><b>User Name: ${userEmail}</b></p>
                                <p><b>User Name: ${userMsg}</b></p>
                            </div>
                        `

    Email.send({
        SecureToken: "9c79b307-ab02-4fe7-a2ba-52be4b4756b8",
        To : "team@thesugoishinobis.com",
        From : userEmail,
        Subject : "New User Message",
        Body :  mailBody
    }).then(
        message => {
            console.log('Email Sent Status: ' + message);
            createToast(('success'))
        }
    );
}