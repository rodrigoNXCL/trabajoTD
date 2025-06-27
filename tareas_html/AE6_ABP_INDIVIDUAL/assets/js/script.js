console.log('🚀 script.js arrancó');

$(function() {
  console.log('✅ jQuery está definido, $() funciona');

  $('#galleryModal').on('show.bs.modal', function (event) {
    console.log('▶ show.bs.modal disparado');
    const thumb   = $(event.relatedTarget);
    const src     = thumb.attr('src');
    const caption = thumb.attr('data-bs-caption');
    console.log('   • src     =', src);
    console.log('   • caption =', caption);
    $('#modalImage').attr('src', src);
    $('#galleryModalLabel').text(caption);
  });
});
