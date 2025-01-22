import axios from 'axios';

const AIRTABLE_API_KEY = process.env.REACT_APP_AIRTABLE_API_KEY;
const BASE_ID = process.env.REACT_APP_BASE_ID;
const TABLE_STARTDATE = process.env.REACT_APP_TABLE_ID_STARTDATE;
const TABLE_ID1 = process.env.REACT_APP_TABLE_ID_P1P2;
const TABLE_ID2 = process.env.REACT_APP_TABLE_ID_P3P8;

export const fetchData_startDate = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_STARTDATE}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      id: record.fields.id,
      date: record.fields.CohortStart,

    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};


export const fetchData_P1P2 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID1}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      id: record.fields.id,
      pillarTitle: record.fields.PillarTitle,
      pillarDesc: record.fields.PillarDesc,

      weekOddLab1: record.fields.WeekOddLab1,
      oddDateOutput: record.fields.OddDateOutput,
      oddDate1: record.fields.OddDate1,
      oddDate2: record.fields.OddDate2,
      
      weekEvenLab2: record.fields.WeekEvenLab2,
      evenDateOutput: record.fields.evenDateOutput,
      evenDate1: record.fields.EvenDate1,
      evenDate2: record.fields.EvenDate2,

    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};

export const fetchData_P3P8 = async () => {
  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_ID2}`;
  const headers = { Authorization: `Bearer ${AIRTABLE_API_KEY}` };

  try {
    const response = await axios.get(url, { headers });
    return response.data.records.map(record => ({
      id: record.fields.id,
      pillarTitle: record.fields.PillarTitle,
      pillarDesc: record.fields.PillarDesc,

      weekOddLab1: record.fields.WeekOddLab1,
      oddDateOutput: record.fields.OddDateOutput,
      oddDate1: record.fields.OddDate1,
      oddDate2: record.fields.OddDate2,
      
      weekEvenLab2: record.fields.WeekEvenLab2,
      evenDateOutput: record.fields.EvenDateOutput,
      evenDate1: record.fields.EvenDate1,
      evenDate2: record.fields.EvenDate2,
      
    }));
  } catch (error) {
    console.error('Error fetching data from Airtable', error);
    return [];
  }
};





export const formatToLocalTime = (dateString, includeTimezone = true, timezone = null) => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid date";

  // Use the local timezone if no timezone is provided
  const localTimezone = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'; // Fallback to UTC if no timezone is detected

  let formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
    timeZone: localTimezone, // Use local or passed timezone
    timeZoneName: includeTimezone ? 'short' : undefined
  }).format(date);

  // Remove the first space before AM/PM and make it lowercase
  formattedTime = formattedTime.replace(/ (\wM)/, match => match.toLowerCase().trim());

  // Remove minutes if they are ":00"
  formattedTime = formattedTime.replace(/(:00)/, '');

  return formattedTime;
};


export const timezones = [
  "UTC", // GMT+0
  "Atlantic/Azores", // GMT-1
  "Atlantic/South_Georgia", // GMT-2
  "America/Buenos_Aires", // GMT-3
  "America/St_Johns", // GMT-3:30
  "America/Caracas", // GMT-4
  "America/New_York", // GMT-5
  "America/Chicago", // GMT-6
  "America/Denver", // GMT-7
  "America/Los_Angeles", // GMT-8
  "America/Anchorage", // GMT-9
  "Pacific/Honolulu", // GMT-10
  "Pacific/Midway", // GMT-11
  "Pacific/Kiritimati", // GMT+14
  "Pacific/Apia", // GMT+13
  "Pacific/Chatham", // GMT+12:45
  "Pacific/Auckland", // GMT+12
  "Pacific/Fiji", // GMT+12
  "Pacific/Noumea", // GMT+11
  "Australia/Sydney", // GMT+10
  "Australia/Darwin", // GMT+9:30
  "Asia/Tokyo", // GMT+9
  "Asia/Seoul", // GMT+9
  "Asia/Shanghai", // GMT+8
  "Asia/Taipei", // GMT+8
  "Asia/Bangkok", // GMT+7
  "Asia/Yangon", // GMT+6:30
  "Asia/Dhaka", // GMT+6
  "Asia/Kathmandu", // GMT+5:45
  "Asia/Karachi", // GMT+5
  "Asia/Kolkata", // GMT+5:30
  "Asia/Kabul", // GMT+4:30
  "Asia/Dubai", // GMT+4
  "Asia/Yerevan", // GMT+4
  "Asia/Tehran", // GMT+3:30
  "Africa/Nairobi", // GMT+3
  "Europe/Moscow", // GMT+3
  "Europe/Istanbul", // GMT+3
  "Africa/Johannesburg", // GMT+2
  "Africa/Cairo", // GMT+2
  "Europe/Athens", // GMT+2
  "Europe/Berlin", // GMT+1
  "Europe/Paris", // GMT+1
  "Europe/London", // GMT+0
];



const getTimezoneOffset = (timezone) => {
  const now = new Date();
  const tzOffset = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short',
  }).formatToParts(now);

  const offsetPart = tzOffset.find((part) => part.type === 'timeZoneName');
  return offsetPart ? offsetPart.value : '';
};

// Updated dropdown component
export const timezoneDropdown = (selectedTimezone, setSelectedTimezone) => {
  return (
      <select
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
      >
          {timezones.map((tz) => {
              const offset = getTimezoneOffset(tz);
              return (
                  <option key={tz} value={tz}>
                      {`${tz} (${offset})`}
                  </option>
              );
          })}
      </select>
  );
};

/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///
/// FORMAT TO LOCAL TIMEZONE ///



