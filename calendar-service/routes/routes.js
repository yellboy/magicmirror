var fs = require('fs');
var calendarEvents = [];
getCalendarEntries();

var appRouter = function(app) {
    app.get("/", function(req, res){
        res.send("Hello World");
    });
    app.get("/calendar", function(req, res){
        res.send(filterFutureEvents(calendarEvents));
    });
};

function filterFutureEvents(calendarEvents) {
    var futureEvents = [];
    var now = new Date();
    var length = calendarEvents.length;

    for (var i = 0; i < length; i++) {
        var date = Date.parse(calendarEvents[i].date);
        if (date > now) {
            futureEvents.push(calendarEvents[i]);
        }
    }

    futureEvents.sort(function(a,b){
        return Date.parse(a.date) - Date.parse(b.date);
    });

    return futureEvents;
}

function getCalendarEntries(){
    var input = fs.createReadStream('./mockedCalendar.txt');
    readLines(input, parseLine);

    return calendarEvents;
}

function readLines(input, func) {
  var remaining = '';

  input.on('data', function(data) {
    remaining += data;
    var index = remaining.indexOf('\r\n');
    while (index > -1) {
      var line = remaining.substring(0, index);
      remaining = remaining.substring(index + 2);
      calendarEvents.push(func(line));
      index = remaining.indexOf('\r\n');
    }
  });

  input.on('end', function() {
    if (remaining.length > 0) {
      calendarEvents.push(func(remaining));
    }
  });
}

function parseLine(line) {
  var values = line.split(',');
  return {
      date: values[0],
      event: values[1]
  }
}

module.exports = appRouter;