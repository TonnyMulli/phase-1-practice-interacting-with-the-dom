document.addEventListener("DOMContentLoaded", function() {
    const counterElement = document.getElementById("counter");
    const plusButton = document.getElementById("plus");
    const minusButton = document.getElementById("minus");
    const likeButton = document.getElementById("heart");
    const pauseButton = document.getElementById("pause");
    const resumeButton = document.createElement("button");
    resumeButton.textContent = "Resume";
    resumeButton.id = "resume";
    const commentForm = document.getElementById("comment-form");
    const commentList = document.getElementById("list");
    let counterValue = 0;
    let timerInterval;
  
    function updateCounter() {
      counterElement.textContent = counterValue;
    }
  
    function incrementCounter() {
      counterValue++;
      updateCounter();
    }
  
    function decrementCounter() {
      counterValue--;
      updateCounter();
    }
  
    function likeCounter() {
      const likesList = document.querySelector(".likes");
      const listItem = document.createElement("li");
      listItem.textContent = `${counterValue} - Liked!`;
      likesList.appendChild(listItem);
    }
  
    function pauseCounter() {
      clearInterval(timerInterval);
      plusButton.disabled = true;
      minusButton.disabled = true;
      likeButton.disabled = true;
      pauseButton.textContent = "Resume";
      pauseButton.removeEventListener("click", pauseCounter);
      pauseButton.addEventListener("click", resumeCounter);
    }
  
    function resumeCounter() {
      timerInterval = setInterval(incrementCounter, 1000);
      plusButton.disabled = false;
      minusButton.disabled = false;
      likeButton.disabled = false;
      pauseButton.textContent = "Pause";
      pauseButton.removeEventListener("click", resumeCounter);
      pauseButton.addEventListener("click", pauseCounter);
    }
  
    function addComment(event) {
      event.preventDefault();
      const commentInput = document.getElementById("comment-input");
      const commentText = commentInput.value.trim();
      if (commentText !== "") {
        const commentItem = document.createElement("li");
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = "";
      }
    }
  
    plusButton.addEventListener("click", incrementCounter);
    minusButton.addEventListener("click", decrementCounter);
    likeButton.addEventListener("click", likeCounter);
    pauseButton.addEventListener("click", pauseCounter);
    resumeButton.addEventListener("click", resumeCounter);
    commentForm.addEventListener("submit", addComment);
  
    // Start the timer
    timerInterval = setInterval(incrementCounter, 1000);
  });
  