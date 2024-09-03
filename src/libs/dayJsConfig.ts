import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isoWeek from 'dayjs/plugin/isoWeek';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/id';
import 'dayjs/locale/en';

const language = 'id';

dayjs.extend(localizedFormat);
dayjs.locale(language);
dayjs.extend(duration);
dayjs.extend(isoWeek);

export default dayjs;
