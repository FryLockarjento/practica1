document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var op
  var instances = M.Collapsible.init(elems,op);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});