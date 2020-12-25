import { TagNav } from '../tags-nav';

function closeTag(item: TagNav) {
  console.log('删除');
}
function handleClick(item: TagNav) {
  console.log('点击', item);
}
export { closeTag, handleClick };
