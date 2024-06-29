const { DateTime } = require('luxon');

module.exports.humanReadableDate = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toFormat('d LLLL y');

module.exports.toISODate = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toISODate();

module.exports.toISO = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toISO();

module.exports.toRFC2822 = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toRFC2822();
