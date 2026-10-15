(() => {
  const launcher = document.querySelector("#chat-launcher");
  const panel = document.querySelector("#chat-panel");
  const closeButton = document.querySelector("#chat-close");
  const form = document.querySelector("#chat-form");
  const input = document.querySelector("#chat-input");
  const messagesElement = document.querySelector("#chat-messages");
  const suggestions = document.querySelector("#chat-suggestions");
  const endpoint = (document.body.dataset.chatEndpoint || "").trim();
  if (!launcher || !panel || !form || !input || !messagesElement) return;

  const history = [];
  let busy = false;

  function setOpen(open) {
    panel.hidden = !open;
    launcher.setAttribute("aria-expanded", String(open));
    if (open) input.focus();
  }

  function addMessage(text, kind) {
    const message = document.createElement("div");
    message.className = "chat-bubble " + kind;
    message.textContent = text;
    messagesElement.appendChild(message);
    messagesElement.scrollTop = messagesElement.scrollHeight;
    return message;
  }

  launcher.addEventListener("click", () => setOpen(panel.hidden));
  closeButton.addEventListener("click", () => setOpen(false));

  if (suggestions) {
    suggestions.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-question]");
      if (button && !busy) send(button.dataset.question);
    });
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    send(input.value);
  });

  async function send(rawText) {
    const message = rawText.trim();
    if (!message || busy) return;
    input.value = "";
    if (suggestions) suggestions.hidden = true;
    addMessage(message, "user");
    history.push({ role: "user", content: message });
    busy = true;
    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    const typing = addMessage("Thinking…", "assistant typing");

    try {
      if (!endpoint) {
        throw new Error("The assistant is not connected yet. The site owner needs to add the Lambda Function URL.");
      }
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 40000);
      let response;
      try {
        response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: history.slice(-8) }),
          signal: controller.signal
        });
      } finally {
        clearTimeout(timeout);
      }
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "The assistant could not answer just now. Please try again.");
      }
      const answer = typeof data.answer === "string" ? data.answer : "";
      if (!answer) throw new Error("The assistant returned an empty answer. Please try again.");
      typing.remove();
      addMessage(answer, "assistant");
      history.push({ role: "model", content: answer });
      if (history.length > 12) history.splice(0, history.length - 12);
    } catch (error) {
      typing.remove();
      const messageText = error.name === "AbortError"
        ? "That took too long. Please try again."
        : (error.message || "Something went wrong. Please try again.");
      addMessage(messageText, "assistant error");
      history.pop();
    } finally {
      busy = false;
      submitButton.disabled = false;
      input.focus();
    }
  }
})();
