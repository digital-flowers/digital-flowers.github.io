import "./jquery.easing";
// NOTE: on drop events WILL NOT WORK if you do not "preventDefault" in the on drag over event!!
const initDragAndDrops = () => {
  window.dragStarted = false;
  let dragEndTimer;
  // window events
  // prevent default behavior from changing page on dropped file
  $(window).on("dragover", evt => {
    evt.preventDefault();
    if (!window.dragStarted && $.inArray('Files', evt.originalEvent.dataTransfer.types) > -1) {
      window.dragStarted = true;
      onDragStart();
    }
    return false;
  });
  $(window).on("drop", evt => {
    // drag and drop files
    evt.preventDefault();
    if (window.dragStarted) {
      window.dragStarted = false;
      dragEndTimer && clearTimeout(dragEndTimer);
      dragEndTimer = setTimeout(() => {
        if (!window.dragStarted) {
          onDragEnd(evt);
        }
      }, 500);
    }
    onDrop(evt);
    return false;
  });
  // the following are hacks to allow drag drop from read only file system :P
  $(window).on("dragleave", evt => {
    // drop files
    window.dragStarted = false;
    dragEndTimer && clearTimeout(dragEndTimer);
    dragEndTimer = setTimeout(() => {
      if (!window.dragStarted) {
        onDragEnd(evt);
      }
    }, 500);
    onDrop(evt);
    evt.preventDefault();
    return false;
  });
  // callbacks
  const $html = $("html");
  const onDragStart = () => $html.addClass("drag");
  const onDragEnd = () => $html.removeClass("drag");
  const onDrop = () => null;

  // fix for safari react-file-uploader, see: https://github.com/lionng429/react-file-uploader/issues/7
  if (!window.DragEvent) {
    window.DragEvent = 'dummy';
  }
};

initDragAndDrops();
