export const renderModal = (trailerUrl) => {
  const modal = `
    <div class="modal" id="modal">
      <div class="modal-box">
        <div class="modal-content">
          ${
            trailerUrl
              ? `<iframe class="frame-player"
                src="${trailerUrl}"
                frameborder="0"
              ></iframe>`
              : `
              <h2 class="modal-alarm">
                <span class="alarm-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                  </svg>
                </span>
                <span class="alarm-message">
                  Unfortunately this anime does not have a trailer available
                  on YouTube. We apologize for the inconvenience!
                </span>
              </h2>`
          }
        </div>
      </div>
    </div>
  `;
  return modal;
};
