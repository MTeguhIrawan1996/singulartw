import dayjs from '@/lib/dayJsConfig';

export function dateFormat(
  value: string | Date | undefined | null,
  format?:
    | 'DD'
    | 'DD MMM'
    | 'LL'
    | 'LTS'
    | 'YYYY-MM-DD'
    | 'YYYY-DD-MM'
    | 'DD/MM/YYYY'
    | 'MM/DD/YYYY'
    | 'dddd, LL'
    | 'LLLL WIB'
    | 'hh:mm WIB'
    | 'DD, LL'
    | 'LL, hh:mm WIB'
    | 'DD, LL, hh:mm WIB'
    | 'hh:mm A'
    | 'hh:mm:ss A'
    | 'hh:mm:ss'
    | 'HH:mm:ss',
) {
  return value
    ? dayjs(value)
        .locale('id')
        .format(format ?? 'LL')
    : null;
}

export function dateToString(date: Date | null) {
  return date ? dayjs(date).format() : null;
}

export function stringToDate(date: string | null) {
  return date ? dayjs(date).toDate() : null;
}
