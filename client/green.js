Template.layout.events({
  'keypress textarea, keyup textarea': function (event) {
    function count(){
    var val = $.trim($(event.target).val()), // Remove spaces from b/e of string
      chars = val.length,
      parent = $(event.target).parents('.form-group');
      limit = $(event.target).data('limit');
      parent.find('.help-block').html( chars +' / '+ limit);
      if (chars > limit) {
        parent.addClass('has-error');
      } else {
        parent.removeClass('has-error');
      }
    }
    count();
  },
  'blur textarea, blur input': function (event) {
    var id = event.target.id;
    var val = $(event.target).val();
    Session.setPersistent(id, val);
  }
});

UI.registerHelper('session', function(name) {
    return Session.get(name);
});
