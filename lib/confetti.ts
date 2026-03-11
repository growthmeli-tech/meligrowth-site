export async function fireMoneyConfetti(e: React.MouseEvent) {
  const confetti = (await import("canvas-confetti")).default;

  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const scalar = 2;
  const money = confetti.shapeFromText({ text: "💵", scalar });
  const bag = confetti.shapeFromText({ text: "💰", scalar });

  const defaults = {
    origin: { x, y },
    shapes: [money, bag],
    scalar,
    zIndex: 9999,
  };

  // First burst — wide spread
  confetti({
    ...defaults,
    particleCount: 30,
    spread: 70,
    startVelocity: 35,
    decay: 0.92,
    ticks: 80,
  });

  // Second burst — tighter
  setTimeout(() => {
    confetti({
      ...defaults,
      particleCount: 20,
      spread: 50,
      startVelocity: 25,
      decay: 0.9,
      ticks: 60,
    });
  }, 100);
}
