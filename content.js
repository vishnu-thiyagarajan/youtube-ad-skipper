function clickSkipButton() {
    const skipButton = document.querySelector('.ytp-skip-ad-button');
    if (skipButton) {
        skipButton.click();
    }
  }
  
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList' || mutation.type === 'subtree') {
        clickSkipButton();
      }
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  clickSkipButton();
  