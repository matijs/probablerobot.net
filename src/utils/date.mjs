import { DateTime } from 'luxon';

export const humanReadableDate = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toFormat('d LLLL y');

export const toISODate = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toISODate();

export const toISO = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toISO();

export const toRFC2822 = (value) =>
  DateTime.fromJSDate(value, { zone: 'utc' }).toRFC2822();
