$(document).ready(function () {
  $('#get-data').click(function () {
    var showData = $('#show-data');

    $.getJSON('example.json', function (data) {
      console.log(data);

      var items = data.elements.map(function (item) {
        return item.courseType + ': ' + item.name;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  });
});