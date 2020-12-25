import { TagNav } from '../tags-nav';

function isCurrentTag(current: string, currnetTag: TagNav): boolean {
  if (current == currnetTag.name) {
    return true;
  }
  return false;
}

export default isCurrentTag;
