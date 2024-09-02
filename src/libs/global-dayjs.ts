import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import localizedFormat from "dayjs/plugin/localizedFormat";
import "dayjs/locale/id";
import "dayjs/locale/en";

dayjs.extend(localizedFormat);
dayjs.extend(duration);

export default dayjs;
