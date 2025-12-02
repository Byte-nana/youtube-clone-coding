import { format, register } from 'timeago.js';
import { ko } from 'timeago.js/lib/lang/ko';

register('ko', ko);

export function formatAgo(date, lang = 'en_GB') {
  return format(date, lang);
}
