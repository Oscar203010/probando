function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
}

function initMap() {
  const location = { lat: -6.803707, lng: -79.838209 }; // Coordenadas de la ubicación de la institución educativa
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location,
  });

  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Institución Educativa Carmelo Felix Medrano 10125 - Jayanca",
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   // Obtenemos todos los elementos de menú
//   var menuItems = document.querySelectorAll(".menu li a");

//   // Agregamos un evento clic a cada elemento de menú
//   menuItems.forEach(function (item) {
//     item.addEventListener("click", function () {
//       // Eliminamos la clase "active" de todos los elementos de menú
//       menuItems.forEach(function (menuItem) {
//         menuItem.classList.remove("active");
//       });

//       // Agregamos la clase "active" al elemento de menú clicado
//       this.classList.add("active");
//     });
//   });
// });


// Obtener elementos del chatbot
const chatIcon = document.getElementById("chat-icon");
const chatContainer = document.getElementById("chat-container");
const closeChatButton = document.getElementById("close-chat");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");


// Función para agregar un mensaje al chat
function addMessage(message, isUser = false) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("message", isUser ? "user" : "bot");
  messageElement.textContent = message;
  chatMessages.appendChild(messageElement);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para procesar el mensaje del usuario y obtener la respuesta del bot
function processUserInput() {
  const userMessage = userInput.value;
  addMessage(userMessage, true);

  // Aquí puedes agregar la lógica para generar la respuesta del bot
  const botResponse = "Hola, soy el chatbot. ¡Gracias por tu mensaje!";
  setTimeout(() => {
    addMessage(botResponse);
  }, 1000);

  userInput.value = "";
}

// Evento para abrir el chatbot
chatIcon.addEventListener("click", () => {
  chatIcon.style.display = "none";
  chatContainer.style.display = "block";
});

// Evento para cerrar el chatbot
closeChatButton.addEventListener("click", () => {
  chatIcon.style.display = "block";
  chatContainer.style.display = "none";
});

// Evento para enviar mensajes del usuario
sendButton.addEventListener("click", () => {
  if (userInput.value.trim() !== "") {
    processUserInput();
  }
});

// Mostrar el chatbot al cargar la página
window.addEventListener("load", () => {
  chatIcon.style.display = "block";
  chatContainer.style.display = "none";
});

