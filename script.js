// 한 줄 소개 타이핑 효과
const intros = [
  "AI와 함께 놀고 있습니다. 같이 노실 분?",
];
const typingEl = document.getElementById("typing");
let lineIdx = 0;
let charIdx = 0;
let deleting = false;

function typeLoop() {
  const text = intros[lineIdx];
  typingEl.textContent = text.slice(0, charIdx);

  if (!deleting && charIdx < text.length) {
    charIdx++;
    setTimeout(typeLoop, 70);
  } else if (!deleting) {
    deleting = true;
    setTimeout(typeLoop, 2200);
  } else if (charIdx > 0) {
    charIdx--;
    setTimeout(typeLoop, 30);
  } else {
    deleting = false;
    lineIdx = (lineIdx + 1) % intros.length;
    setTimeout(typeLoop, 400);
  }
}
typeLoop();

// 캐릭터 클릭 시 말풍선
const greetings = ["안녕하세요! 😎", "같이 노실 분? 🙌", "AI랑 노는 중 🤖", "SideOnAI입니다 🚀"];
const avatar = document.getElementById("avatar");
const bubble = document.getElementById("bubble");
let greetIdx = 0;
let bubbleTimer;

avatar.addEventListener("click", () => {
  bubble.textContent = greetings[greetIdx];
  greetIdx = (greetIdx + 1) % greetings.length;
  bubble.classList.add("show");
  clearTimeout(bubbleTimer);
  bubbleTimer = setTimeout(() => bubble.classList.remove("show"), 1800);
});

// 카드 뒤집기
const card = document.getElementById("card");
document.getElementById("flipBtn").addEventListener("click", () => card.classList.add("flipped"));
document.getElementById("flipBackBtn").addEventListener("click", () => card.classList.remove("flipped"));

// 연락처 복사
const toast = document.getElementById("toast");
let toastTimer;

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1500);
}

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      showToast(`복사되었습니다: ${btn.dataset.copy}`);
    } catch {
      showToast("복사에 실패했어요 😢");
    }
  });
});
