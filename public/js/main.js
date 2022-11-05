// FAB MENU
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
        direction: 'left',
        hoverEnabled: false
    });
  });


// ENABLE TOOLTIPS
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {
        position: 'top'
    });
  });


// ACTIVATE MODAL
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, modal1);
});

// FORM - SELECT
document.addEventListener('DOMContentLoaded', function() {
    var sel=document.querySelectorAll('select');
    M.FormSelect.init(sel)
});

// FORM - DATEPICKER
document.addEventListener('DOMContentLoaded', function() {
var date = document.querySelectorAll('.datepicker');
M.Datepicker.init(date, {
  autoClose: true,
  disableWeekends: true,
}
);
});